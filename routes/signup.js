var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var db = require('../utils/db');

router.get('/', function(req, res, next) {
    res.render('signup')
});

router.post('/', function(req, res, next) {
    if (!req.body.username && !req.body.password) {
        res.json({
            "error": "invalid username or password"
        });
    } else {
        var username = req.body.username;
        var password = req.body.password;
        var hash = bcrypt.hashSync(password, 10);
        var user = {
            username: username,
            hash: hash
        }
        data = db.addUser(user);
        res.redirect('/signin');
    }
});

module.exports = router;
