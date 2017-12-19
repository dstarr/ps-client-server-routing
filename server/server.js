var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    // serve up the public folder as static content
    .use('/', express.static('./public'));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;

// run the server
http.createServer(app).listen(8080);


