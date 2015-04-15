module.exports = function(app) {
  var express = require('express');
  var applicationRouter = express.Router();

  var en = require('../locales/en.js');
  var rus = require('../locales/rus.js');
  var ua = require('../locales/ua.js');

  var locales = {
    en : en, 
    rus: rus, 
    ua : ua
  };

  applicationRouter.get('/locales', function(req, res) {
    res.send(ua);
  });

  applicationRouter.get('/locales/:locale', function(req, res) {
    var isLocaleAvailable = locales[req.params.locale];
    if (isLocaleAvailable)
      res.send(locales[req.params.locale]);
    else 
      res.status(404).send({error: 'no such locale'})
  });

  app.use('/api', applicationRouter);
};
