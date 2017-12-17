var express = require('express');
var handlers = require('./apiRouteHandlers');

var apiRouter = express.Router();

apiRouter.route("/items")
  .get(handlers.getAllItems);

apiRouter.route('/items/:id')
  .get(handlers.getItem);

module.exports = apiRouter;

