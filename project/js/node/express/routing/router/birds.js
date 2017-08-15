var express = require('express');
var router = express.Router();

// 该路由使用自己的中间件
router.use(function (req, res, next) {
    console.log('birds Time： ', Date.now());
    next();
})

router.get('/', function (req, res) {
    res.send('Birds home page');
});

router.get('/about', function (req, res) {
    res.send('About birds');
});

module.exports = router;