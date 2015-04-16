module.exports = function(app) {
  var express = require('express');
  var applicationRouter = express.Router();

  var pages = {};
  pages.index = require('../data/pages/index');

  applicationRouter.get('/:locale/index', function(req, res) {
    console.log(pages.index[req.params.locale])
    res.send(pages.index[req.params.locale]);
  });

  app.use('/api', applicationRouter);
};
