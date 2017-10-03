const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to WEB that will be dock by docker!<p> <a href="/health">Health Check</a>')
})

app.get('/health', function (req, res) {
  res.send('OK')
})

console.log('Server running on localhost:8080')
app.listen(8080)
