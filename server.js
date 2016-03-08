var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
var root_dir = '.';

var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('layouts/posts.html', {
        root: root_dir
    });
})

app.get('/api/posts', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                return next(err)
            }
            res.json(posts)
        })
})

app.post('/api/posts', function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body,
    })
    post.save(function (err, post) {
        if (err) {
            return next(err)
        }
        res.status(201).json(post)
    })
})

app.listen(3000, function () {
    console.log('server listening on', 3000)
})