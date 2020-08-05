var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    res.send('This is my Home page using Express Router')
})

module.exports = router