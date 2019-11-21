const express = require('express')
const app = express()
const PORT = 3000

const voterRouter = require('./routes/voterRoutes');
const movieRouter = require('./routes/movieRoutes');
const homeRouter = require('./routes/homeRoutes');
const helper = require('./helpers/helpers');
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))



app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.locals.helper = helper;

app.use('/voter', voterRouter);
app.use('/movies', movieRouter);
app.use('/', homeRouter)
app.use(express.static('uploads'));

app.listen(PORT, () => console.log(`heard on ${PORT}`))