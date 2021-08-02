var express = require('express');
var router = express.Router();

/* GET request for music homepage */
router.get('/', function(req, res, next) {
  res.render('gaming_platform', { title: 'Music Home' });
});
module.exports = router;
