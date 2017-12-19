var express = require('express');
var http = require('http');
var personApiRouter = require('./routes/apiRouter');
var bodyParser = require('body-parser');

var app = express();

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    // serve up the public folder as static content
    .use('/', express.static('./public'));

    // provide simple REST API endpoints via a dedicated api apiRouter
    // .use('/api', personApiRouter)

module.exports = app;

// run the server
http.createServer(app).listen(8080);


