module.exports = function(app) {
  var express = require('express');
  var applicationRouter = express.Router();

  var goods = require('../data/goods/goods.js');
  
  goods.shared.forEach(function (data, i) {
    extend(goods.ua[i], data);
    extend(goods.rus[i], data);
    extend(goods.en[i], data);
  });

  var blogPreview = require('../data/blog-preview/blog-preview.js');

  blogPreview.shared.forEach(function (data, i) {
    extend(blogPreview.ua[i], data);
    extend(blogPreview.rus[i], data);
    extend(blogPreview.en[i], data);
  });

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
