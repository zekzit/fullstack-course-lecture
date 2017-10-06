const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const users = require('./user')
const refreshTokens = require('./refresh_token')

const generateRefreshToken = () => {
    return crypto.randomBytes(32).toString('base64')
}
const generateAccessToken = (userId, scope, expiresIn) => {
    jwt.sign({ type: 'access_token' }, 'secret', { expiresIn, algorithm: 'HS256', issuer: 'example.com/auth'})
}

const tokenWithPassword = (email, password, scope) => 
    users.findByEmail(email)
    .then(user => {
        if(user.password !== password) throw 'email or password invalid'
        if(user.role !== scope) throw 'scope forbidden'
        const refreshToken = generateRefreshToken()
        return refreshTokens.create({userId: user.id, refreshToken, scope})
            .then(() => ({refreshToken, user}))
    })
    .then(({refreshToken, user}) => {
        const accessToken = generateAccessToken(user.id, scope, 60)
        return {
            refresh_token: refreshToken,
            access_token: accessToken,
            expires_in: 60,
            user_id: user.id,
            token_type: 'bearer'
        }
    })

const tokenWithRefreshToken = (refreshToken) => {
    refreshTokens.find(refreshToken)
    .then(refreshToken => {
        const accessToken = generateAccessToken(user.id, scope, 60)
        return {
            refresh_token: refreshToken,
            access_token: accessToken,
            expires_in: expiresIn,
            user_id: user.id,
            token_type: 'bearer'
        }
    })
}
const revoke = (refreshToken) => {
    refreshTokens.remove(refreshToken)
}

module.exports = {
    tokenWithPassword,
    tokenWithRefreshToken,
    revoke
}