const crypto = require('crypto');
const User = require('../models').User
const Timestamp = require('../models').Timestamp
const TimestampType = require('../models').TimestampType
const timestampController = {}

timestampController.checkin = (username) => {
    return new Promise((resolve, reject) => {
        findUserIdFromUsername(username).then(user => {
            let checkinTimestamp = {
                timestampType: TimestampType.CHECKIN,
                userId: user.id
            }
            return Timestamp.create(checkinTimestamp)
        }).then(checkinTimestamp => {
            resolve(checkinTimestamp)
        }).catch(err => {
            reject(err)
        })
    })
}
timestampController.checkout = (username) => {
    return new Promise((resolve, reject) => {
        findUserIdFromUsername(username).then(user => {
            let checkoutTimestamp = {
                timestampType: TimestampType.CHECKOUT,
                userId: user.id
            }
            return Timestamp.create(checkoutTimestamp)
        }).then(checkoutTimestamp => {
            resolve(checkoutTimestamp)
        }).catch(err => {
            reject(err)
        })
    })
}
timestampController.history = (username) => {
    return new Promise((resolve, reject) => {
        findUserIdFromUsername(username).then(user => {
            return Timestamp.findAll({
                where: {
                    userId: user.id
                },
                order: [
                    ['timestamp', 'DESC']
                ]
            })
        }).then(timestampHistories => {
            resolve(timestampHistories)
        }).catch(err => {
            reject(err)
        })
    })
}

function findUserIdFromUsername(username) {
    return User.findOne({
        where: {
            username: username
        }
    })
}

module.exports = timestampController