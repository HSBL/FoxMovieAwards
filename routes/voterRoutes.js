const express = require('express')
const voterRouter = express.Router()
const VoterController = require('../controllers/VoterController')
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

voterRouter.get('/register', VoterController.getRegister)
voterRouter.post('/register', upload.single('profilpic'), VoterController.postRegister)
voterRouter.get('/login', VoterController.getLogin)
voterRouter.post('/login', VoterController.postLogin)
voterRouter.get('/:id/edit', VoterController.getEdit);
voterRouter.post('/:id/edit', VoterController.postEdit);
voterRouter.post('/delete/:id', VoterController.delete);
voterRouter.get('/', VoterController.vote)

module.exports = voterRouter