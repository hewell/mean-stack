var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());
app.use('/api/posts', require('./controllers/api/posts'));

app.get('/', function (req, res) {
    res.sendFile('layouts/posts.html', {
        root: '.'
    });
});

app.listen(3000, function () {
    console.log('server listening on', 3000);
});