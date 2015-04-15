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

  applicationRouter.get('/', function(req, res) {
    res.send(ua);
  });

  applicationRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  applicationRouter.get('/:locale', function(req, res) {
    var isLocaleAvailable = locales[req.params.locale];
    if (isLocaleAvailable)
      res.send(locales[req.params.locale]);
    else 
      res.status(404).send({error: 'no such locale'})
  });

  applicationRouter.put('/:locale', function(req, res) {
    res.send({
      'locale': {
        locale: req.params.locale
      }
    });
  });

  applicationRouter.delete('/:locale', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/locales', applicationRouter);
};
