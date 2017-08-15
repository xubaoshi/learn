var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('this is dogs home');
});

router.get('/about', function (req, res) {
    res.send('about dogs ');
});

module.exports = router;