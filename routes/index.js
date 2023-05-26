var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GreyCellsTech' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'GreyCellsTech' });
});
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'GreyCellsTech' });
});
router.get('/customers', function (req, res, next) {
  res.render('customers', { title: 'GreyCellsTech' });
});

router.get('/contract', function (req, res, next) {
  res.render('customers', { title: 'GreyCellsTech' });
});
module.exports = router;
