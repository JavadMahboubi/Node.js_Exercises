const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/assets', express.static('public'));

var script = require('./public/js/script')
app.use('/script', script)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



/* app.get('/assets/script', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/js/script.js'));
}); */

app.listen(port)