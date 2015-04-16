module.exports = function(app) {
  var express = require('express');
  var applicationRouter = express.Router();

  applicationRouter.get('/locales', function(req, res) {
    res.send({});
  });

  app.use('/api', applicationRouter);
};
