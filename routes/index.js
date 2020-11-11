var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OT Electrician | You Best Plug for any Electrical Work', content: 'Hello World' });
});

module.exports = router;