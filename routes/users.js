var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('where the users at?')
})

module.exports = router;
