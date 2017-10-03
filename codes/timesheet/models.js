const Sequelize = require('sequelize');
const sequelize = new Sequelize('workshop', 'mee', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})
const cryptoUtil = require('./utils/cryptoUtil')
const SALT = 'SaLtZ'

const TimestampType = {
    CHECKIN: 1,
    CHECKOUT: 2
}

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    token: Sequelize.STRING
})

const Timestamp = sequelize.define('timestamp', {
    timestampType: Sequelize.INTEGER,
    timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

module.exports = { User, Timestamp, TimestampType }

sequelize.sync({force:true}).then(() => User.create({
    username: 'admin',
    password: cryptoUtil.sha512('demo', SALT).passwordHash
  })).then(() => {
    User.create({
        username: 'user',
        password: cryptoUtil.sha512('demo', SALT).passwordHash
      }) 
  })
