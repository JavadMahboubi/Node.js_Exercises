const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/products', function (req, res) {
    throw new Error('Server error, please try it later')
})

app.use(function (req,res,next){
    res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

app.use(function (err, req, res, next) {
    res.status(500).send(err.message)
})

app.listen(port)