const Voter = require('../models').Voter

class VoterController {
    static getRegister(req, res) {
        res.render('voter/register')
    }
    static postRegister(req, res) {
        Voter.create(req.body)
            .then(res.redirect('register'))
            .catch(err => res.send(err))
    }
    static getLogin(req, res) {
        res.render('voter/login')
    }
    static postLogin(req, res) {
        res.send(req.body)
    }
}

module.exports = VoterController