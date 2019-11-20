const express = require('express')
const movieRouter = express.Router()
const MovieController = require('../controllers/MovieController')

movieRouter.get('/', MovieController.getMovies);


module.exports = movieRouter;