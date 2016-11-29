var express = require('express');
var router = express.Router();
var mode   = process.env.NODE_ENV
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(mode);
});

module.exports = router;
