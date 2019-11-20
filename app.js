const express = require('express')
const app = express()
const PORT = 3000

const voterRouter = require('./routes/voterRoutes');
const movieRouter = require('./routes/movieRoutes');
const homeRouter = require('./routes/homeRoutes');
const helper = require('./helpers/helpers');
const multer = require('multer');

// configure multer storeage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
    })

const upload = multer({ storage: storage }).single('profilpic')

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.locals.helper = helper;

app.use('/voter', voterRouter);
app.use('/movies', movieRouter);
app.use('/', homeRouter)

app.listen(PORT, () => console.log(`heard on ${PORT}`))