const Voter = require('../models').Voter

class VoterController {
    static getRegister(req, res) {
        res.render('voter/register', {type: null})
    }
    static postRegister(req, res) {
        Voter.create(req.body)
            .then(() => {
                res.render('voter/register', {type: 'success', msg: ''})
            })
            .catch(err => {
                res.render('voter/register', {type: 'error', msg: err})
            })
    }
    static getLogin(req, res) {
        res.render('voter/login')
    }
    static postLogin(req, res) {
        res.send(req.body)
    }
}

module.exports = VoterController