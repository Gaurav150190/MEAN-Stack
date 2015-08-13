var express = require('express');
var bodyParser = require('body-parser');
var Post = require('../models/Posts');
var app = express();
var path = require('path');
app.use(bodyParser.json());

app.get('/api/posts', function (req, res, next) {
    Post.find(function (err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    });
});

app.get('/', function (req, res) {
	console.log(__dirname);
    res.sendFile(__dirname+'/index.html')
})
app.post('/api/posts', function (req, res, next) {

    var post = {};
    post = new Post({
        title: req.body.title,
        link: req.body.link
    });

    post.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, post)
    });
});

app.put('/api/posts/:_id', function (req, res) {

    Post.findById(req.params._id, function (err, post) {
        post.title = req.body.title;
        post.link = req.body.link;
        post.save(function () {
            res.json(true);
        })
    })
})

app.post('/api/delete', function (req, res, next) {
    Post.find({ _id: req.body._id }).remove(function () {
        res.json(true);
    })
})


app.listen(3017, function () {
	console.log(__dirname);
    console.log('Server listening on', 3017)
})
