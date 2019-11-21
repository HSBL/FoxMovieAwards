const Voter = require('../models').Voter;
const Vote = require('../models').Vote;
const Movie = require('../models').Movie;
const Category = require('../models').Category;
const CategoryMovies = require('../models').CategoryMovies;
const sequelize = require('sequelize')

class HomeController {
    static getHome(req, res) {
        let votesArr = [];
        Vote.findAll({
            group: ['Movie.id', 'Category.id'],
            attributes: ['Movie.id', 'Category.id', [sequelize.fn('COUNT', 'Movie.id'), 'Count']],
            include: [{model: Movie},{model: Category}]
          })
        .then(votes => {
            // res.send(votes)
            var result = {}
            let arr = [];
            for (let vote of votes) {
                if(!result[vote.Category.name]){
                    result[vote.Category.name] = {winner : vote.Movie.title, Count : Number(vote.dataValues.Count)}
                } else {
                    if(result[vote.Category.name].Count < Number(vote.dataValues.Count)){
                        result[vote.Category.name] = {winner : vote.Movie.title, Count : Number(vote.dataValues.Count)}
                    }
                }
        }
        return Promise.all([result]);
        })
        .then(result => {
            if(!req.session.voter){
                res.render('index', {logged: false, user : null, result});
            } else {
                res.render('index', {logged: true, user: req.session.voter, result});
            }
        })

        
        
        // Voter.findOne({where:{isLogin : 1}})
        // .then(user =>{
        //     // res.send(user)
        //     if(!user){
        //         res.render('index', {logged: false, user : null});
        //     } else {
        //         res.render('index', {logged: true, user});
        //     }
        // })
    }
}

module.exports = HomeController;