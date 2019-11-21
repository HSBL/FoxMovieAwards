const Voter = require('../models').Voter

class HomeController {
    static getHome(req, res) {
        if(!req.session.voter){
            res.render('index', {logged: false, user : null});
        } else {
            res.render('index', {logged: true, user: req.session.voter});
        }
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