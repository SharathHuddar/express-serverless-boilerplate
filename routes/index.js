var express = require('express');
var router = express.Router();
basePath = process.env.NODE_ENV === 'production' ? process.env.basePath : '';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        basePath: basePath
    });
});

module.exports = router;
