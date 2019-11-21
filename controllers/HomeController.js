const Voter = require('../models').Voter
const Vote = require('../models').Vote
const Category = require('../models').Category
const Movie = require('../models').Movie
const sequelize = require('sequelize')

class HomeController {
    static getHome(req, res) {
        if(!req.session.voter){
            // Category.findAll({include:['Movies']})
            //     .then(categories => {
            //         const winners = [];
            //         for (let i = 0; i < categories.length; i++) {
            //             let obj = {}
            //             let promises = []
            //             for (let j = 0; j < categories[i].Movies.length; j++) {
            //                 Vote.findAndCountAll({where:{CategoryId: categories[i].id, MovieId: categories[i].Movies[j].id}})
            //                 .then(result => {
            //                     promises.push(result)
            //                     if(!obj[categories[i].name]){
            //                         obj[categories[i].name]  = categories[i].Movies[j].title;
            //                         obj.count = result.count
            //                     } else{
            //                         if(obj.count<result.count){
            //                             obj[categories[i].name]  = categories[i].Movies[j].title;
            //                             obj.count = result.count
            //                         }
            //                     }
            //                     console.log(`${categories[i].name}, ${categories[i].Movies[j].title} = ${result.count}`)
            //                 })
            //             }
            //             winners.push(obj)
            //         }
            //         return winners
            //         // res.send(categories)
            //         // res.render('index', {logged: false, user: null, categories});
            //     })
            //     .then(winners=>{
            //         res.send(winners)
            //     })
            Vote.findAll({group:['CategoryId', 'MovieId'],
                            attributes:['CategoryId', 'MovieId', [sequelize.fn('COUNT', 'MovieId'), 'Count']]})
                            // .then(votes => {
                            //     var result = {}
                            //     for (let i = 0; i < votes.length; i++) {
                            //         if(!result[votes[i].CategoryId]){
                            //             result[votes[i].CategoryId] = {winner : votes[i].MovieId, Count : Number(votes[i].dataValues.Count), Category: votes[i].CategoryId}
                            //         } else {
                            //             if(result[votes[i].CategoryId].Category === votes[i].CategoryId && result[votes[i].CategoryId].Count < Number(votes[i].dataValues.Count)){
                            //                 result[votes[i].CategoryId] = {Category: votes[i].CategoryId, winner : votes[i].MovieId, Count : Number(votes[i].dataValues.Count)}
                            //             }
                            //         }
                            //     }
                            //     res.send(result)
                            // })
                            .then(votes => {
                                var result = {}
                                for (let i = 0; i < votes.length; i++) {
                                    if(!result[votes[i].CategoryId]){
                                        result[votes[i].CategoryId] = {category: votes[i].CategoryId, winner : votes[i].MovieId, Count : Number(votes[i].dataValues.Count)}
                                    } else {
                                        if(result[votes[i].CategoryId].category === votes[i].CategoryId && result[votes[i].CategoryId].Count < Number(votes[i].dataValues.Count)){
                                            result[votes[i].CategoryId] = {category: votes[i].CategoryId, winner : votes[i].MovieId, Count : Number(votes[i].dataValues.Count)}
                                        }
                                    }
                                }
                                res.send(result)
                            })
                
        } else {
            Category.findAll({include:['Movies']})
            .then(categories => {
                res.render('index', {logged: true, user: req.session.voter, categories});
            })
        }
    }
}

module.exports = HomeController;