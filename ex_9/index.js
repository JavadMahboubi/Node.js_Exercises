// require the express module
const express = require('express');
const port = 3000;

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function (request, response) {
    response.send("Congrats you're using your first Node.js and Express as Web Server");
});

// configure the port that express is going to listen to
app.listen(port, function () {
    console.log(`This HTTP server is running on port ${port}`);
});