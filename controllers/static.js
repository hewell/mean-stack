var router = require('express').Router();

router.get('/', function (req, res) {
    res.sendFile('layouts/posts.html', {root: '.'});
});

module.exports = router;