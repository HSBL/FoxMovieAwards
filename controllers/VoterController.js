const Voter = require('../models').Voter;
const Vote = require('../models').Vote;
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const bcrypt = require('bcrypt');
const saltRounds = 10;

class VoterController {
    static getRegister(req, res) {
        res.render('voter/register', {type: null})
    }
    static postRegister(req, res) {
        req.body.path = req.file.filename;

        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            if(err => res.send(err))
            req.body.password = hash
            Voter.create(req.body)
                .then(() => {
                    // res.render('voter/register', {type: 'success', msg: ''})
                    res.redirect('/')
                })
                .catch(err => {
                    res.render('voter/register', {type: 'error', msg: err})
                })
          });
    }
    static getLogin(req, res) {
        res.render('voter/login')
    }
    static postLogin(req, res) {

        Voter.findOne({where: {email: req.body.email}})
            .then(voter =>{
                if(!voter){
                    res.send("ga ada user")
                } else {
                    bcrypt.compare(req.body.password, voter.password, function(err, login) {
                        // res == true
                        if(err){
                            res.send(err)
                        } else if(!login){
                            res.send("password salah")
                        } else {
                            req.session.voter = voter;
                            // console.log(req.session.voter);
                            res.redirect('/')
                        }
                    });
                }
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

    static vote(req, res) {
        Vote.create({
            CategoryId: req.query.CategoryId,
            MovieId: req.query.MovieId,
            VoterId: req.session.voter.id
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => res.send(err.message));
    }
}

module.exports = VoterController