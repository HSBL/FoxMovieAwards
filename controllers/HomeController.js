const Voter = require('../models').Voter

class HomeController {
    static getHome(req, res) {
        Voter.findOne({where:{isLogin : 1}})
        .then(user =>{
            if(!user){
                res.render('index', {logged: false});
            } else {
                res.render('index', {logged: true});
            }
        })
    }
}

module.exports = HomeController;