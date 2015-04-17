module.exports = function(app) {
  var express = require('express');
  var applicationRouter = express.Router();

  var goods = require('../data/goods/goods.js');
  var blogPreview = require('../data/blog/blog-preview.js');
  var blogFull = require('..//data/blog/blog-full.js');

  putLocales(goods);
  putLocales(blogPreview);
  putLocales(blogFull);

  var goodOfTheDay = require('../data/goods/good-of-the-day.js');
  var brands = require('../data/brands/brands.js');  

  var pages = {
    index: require('../data/pages/index')
  }; 

  applicationRouter.get('/:locale/index', function(req, res) {

    var localized_page = pages.index[req.params.locale];
    var localized_goods = goods[req.params.locale];
    var localized_gotd = goodOfTheDay[req.params.locale];
    var localized_brands = brands[req.params.locale];
    var localized_blogPreview = blogPreview[req.params.locale];
    
    localized_page.goods = localized_goods;
    localized_page.brands = localized_brands;
    localized_page.goodOfTheDay = localized_gotd;
    localized_page.blogPreview = localized_blogPreview;

    res.send(localized_page);
  });

  applicationRouter.get('/:locale/blog/posts/:id', function(req, res) {
    var localized_blogPreview = blogPreview[req.params.locale];

    var payload = blogFull[req.params.locale].filter(function (post) {
      return post.id === +req.params.id
    })[0];

    payload.blogPreview = localized_blogPreview;

    res.send(payload);
  });

  app.use('/api', applicationRouter);
};

function extend (target, source) {
  target = target || {};
  for (var prop in source) {
    if (typeof source[prop] === 'object') {
      target[prop] = extend(target[prop], source[prop]);
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

function putLocales (obj) {
  obj.shared.forEach(function (data, i) {
    extend(obj.ua[i], data);
    extend(obj.rus[i], data);
    extend(obj.en[i], data);
  })
};