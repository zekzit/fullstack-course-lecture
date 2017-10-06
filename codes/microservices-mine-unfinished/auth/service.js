const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const users = require('./user')
const refreshTokens = require('./refresh_token')

const generateRefreshToken = () => crypto.randomBytes(32).toString('base64')

const generateAccessToken = (userId, scope, expiresIn) =>
  jwt.sign(
    { type: 'access_token', userId, scope },
    'secret',
    { expiresIn, algorithm: 'HS256', issuer: 'example.com/auth' }
  )

const tokenWithPassword = (email, password, scope) =>
  users.findByEmail(email)
    .then((user) => {
      // check password
      if (user.password !== password) throw 'email or password wrong'
      if (user.role !== scope) throw 'scope forbidden'
      const refreshToken = generateRefreshToken()
      return refreshTokens.create({ userId: user.id, refreshToken, scope })
        .then(() => ({ refreshToken, user }))
    })
    .then(({ refreshToken, user }) => {
      const accessToken = generateAccessToken(user.id, scope, 60)
      return {
        refresh_token: refreshToken,
        access_token: accessToken,
        expires_in: 60,
        user_id: user.id,
        token_type: 'bearer'
      }
    })

const tokenWithRefreshToken = (refreshToken) =>
  refreshTokens.find(refreshToken)
    .then((refreshToken) => {
      const accessToken = generateAccessToken(refreshToken.userId, refreshToken.scope, 60)
      return {
        access_token: accessToken,
        expires_in: 60,
        user_id: refreshToken.userId,
        token_type: 'bearer'
      }
    })

const revoke = (refreshToken) =>
  refreshTokens.remove(refreshToken)

module.exports = {
  generateRefreshToken,
  generateAccessToken,
  tokenWithPassword,
  tokenWithRefreshToken,
  revoke
}
