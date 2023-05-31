var express = require('express');
var router = express.Router();

/* GET Routes */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GreyCellsTech' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'GreyCellsTech' });
});
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});
router.get('/customers', function (req, res, next) {
  res.render('customers', { title: 'Customers' });
});

router.get('/contract', function (req, res, next) {
  res.render('contract', { title: 'Contracts' });
});

router.get('/agile', function (req, res, next) {
  res.render('agile', { title: 'Agile Transformations' });
});

router.get('/application', function (req, res, next) {
  res.render('application', { title: 'Application Modernizations' });
});

router.get('/datascience', function (req, res, next) {
  res.render('datascience', { title: 'Data Science and Analytics' });
});

router.get('/devops', function (req, res, next) {
  res.render('devops', { title: 'DevSecOps/devops' });
});

router.get('/drupal', function (req, res, next) {
  res.render('drupal', { title: 'Drupal Content Management' });
});

router.get('/IT', function (req, res, next) {
  res.render('IT.ejs', { title: 'Information Technology Support Services' });
});

/* POST Routes */

module.exports = router;
