const express = require('express')
const voterRouter = express.Router()
const VoterController = require('../controllers/VoterController')

voterRouter.get('/register', VoterController.getRegister)
voterRouter.post('/register', VoterController.postRegister)
voterRouter.get('/login', VoterController.getLogin)
voterRouter.post('/login', VoterController.postLogin)

module.exports = voterRouter