var express = require('express');
var router = express.Router();
//db references 
var mongoose = require('mongoose');

var movie = require('../models/movie.js');
/* GET home page. */

router.get('/small', function(req, res, next) {
  movie.find(function (err, movie) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('small', {
                title3: 'small',
                movie: movie
            });
        }
    })
});







module.exports = router;
