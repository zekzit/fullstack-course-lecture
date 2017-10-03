
const User = require('../models').User
const cryptoUtil = require('../utils/cryptoUtil')
const authController = {}

const SALT = 'SaLtZ'

authController.authenticateUser = (username, password) => {
    return new Promise((resolve, reject) => {
        let result = {
            status: 500,
            payload: ''
        }
        if (!username || !password) {
            result.status = 400
            result.payload = 'No username or password specified.'
        } else {
            let hashedPassword = cryptoUtil.sha512(password, SALT).passwordHash
            User.findOne({
                where: {
                    username: username,
                    password: hashedPassword
                }
            }).then(foundUser => {
                if (foundUser) {
                    let token = cryptoUtil.genRandomString(64)
                    result.status = 200
                    result.payload = {
                        userId: username,
                        token: token
                    }
                    foundUser.token = token
                    foundUser.save()
                } else {
                    result.status = 401
                    result.payload = {
                        message: 'User/Password combination not found.'
                    }
                }  
                resolve(result);
            }).catch(err => {
                reject(err)
            })
        }
    })
}

authController.authorizeUser = (token) => {
    return User.findOne({
        where: {
            token: token
        }
    })    
}

module.exports = authController