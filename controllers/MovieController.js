const Movie = require('../models').Movie;
const Category = require('../models').Category;

class MovieController {
    static getMovies(req, res) {
        Movie.findAll({include: [{model: Category}]})
        .then(movies => {
            res.send(movies)
            // res.render('movies/index', {movies});
        })
    }
}

module.exports = MovieController;