var express = require('express');
var router = express.Router();

/* GET request for gaming homepage */
router.get('/', function(req, res, next) {
  res.render('gaming_home', { title: 'Gaming' });
});

/* GET request for playstation homepage */
router.get('/playstation', function(req, res, next) {
  res.render('gaming_platform', { title: 'PlayStation Home' });
});

//GET request for xbox homepage
router.get('/xbox', function(req, res, next) {
  res.render('gaming_platform', { title: 'XBOX Home' });
});

//GET request for nintendo homepage
router.get('/nintendo', function(req, res, next) {
  res.render('gaming_platform', { title: 'Nintendo Home' });
});

//GET request for pc homepage
router.get('/pc', function(req, res, next) {
  res.render('gaming_platform', { title: 'PC Home' });
});

module.exports = router;
