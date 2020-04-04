var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  //TODO your code starts here
});

router.get('/signup', function(req, res, next) {
  //TODO your code starts here
});

router.post('/authenticateUser', function(req, res, next) {
  //TODO your code starts here
});

router.post('/registerUser', function(req, res, next) {
  //TODO your code starts here
});
module.exports = router;
