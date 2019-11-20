const Movie = require('../models').Movie;

class MovieController {
    static getMovies(req, res) {
        Movie.findAll()
        .then(movies => {
            // res.send(movies)
            res.render('movies/index', {movies});
        })
    }
}

module.exports = MovieController;