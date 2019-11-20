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
        Voter.update({isLogin: 1}, {where: {email: req.body.email}})
        .then(() => {
            res.redirect('/')
        })
        .catch(err => res.send(err));
    }
    
    static getEdit(req, res) {
        Voter.findByPk(req.params.id)
        .then(voter => {
            res.render('voter/edit', {type:null, voter})
        })
        .catch(err => res.send(err))
    }

    static postEdit(req, res) {
        Voter.update({email: null}, {where: {id: req.params.id}})
        .then(() => {
            return Voter.update(req.body, {where: {id: req.params.id}})
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => res.send(err))
    }

    static delete(req,res) {
        Voter.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/');
        })
        .catch(err => res.send(err));
    }
}

module.exports = VoterController