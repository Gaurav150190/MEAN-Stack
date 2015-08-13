var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/news', function () {
console.log('mongodb connected')
})
module.exports = mongoose

var PostSchema = new mongoose.Schema({	
	
  title: String,
  link: String
});

var Post=mongoose.model('Post', PostSchema);

module.exports = Post