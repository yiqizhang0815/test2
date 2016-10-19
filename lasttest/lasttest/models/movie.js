var mongoose = require('mongoose');

// define the object schema
var movieSchema = new mongoose.Schema({
    name: {
        type: String       
    }
});

// make this public so the controller can see it
module.exports = mongoose.model('movie', movieSchema);
