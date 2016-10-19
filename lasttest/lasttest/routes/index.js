var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/big', function(req, res, next) {
  res.render('big', { title2: 'big' });
});


module.exports = router;
