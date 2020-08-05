  
const express = require('express')

const app = express()
const port = 3000

var home = require('./home')
var user = require('./user')

app.use('/', home)
app.use('/user', user)

app.listen(port)