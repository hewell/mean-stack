var express = require('express');
var router = express.Router();

router.use('/static', express.static(__dirname + '/../assets'));
router.use('/bower_static', express.static(__dirname + '/../bower_components'));

router.get('/', function (req, res) {
    res.sendFile('layouts/posts.html', {root: __dirname + "/.."});
});

module.exports = router;