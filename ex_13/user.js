
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    res.send('Please log to get a user')
})

router.post('/', function (req, res) {
    res.send('Please log to create a user')
})

router.put('/', function (req, res) {
    res.send('Please log to update a user')
})

router.delete('/', function (req, res) {
    res.send('Please log to delete a user')
})

module.exports = router