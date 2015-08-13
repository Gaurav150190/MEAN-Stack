var mongoose = require('mongoose');
require('./models/Posts');
require('./models/Comments');
mongoose.connect('mongodb://localhost/news');