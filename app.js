const express = require('express')
const app = express()
const PORT = 3000

const voterRouter = require('./routes/voterRoutes');
const movieRouter = require('./routes/movieRoutes');
const homeRouter = require('./routes/homeRoutes');
const helper = require('./helpers/helpers');

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.locals.helper = helper;

// app.get('/', (req, res) => {
//     res.render('index')
// })
app.use('/voter', voterRouter);
app.use('/movies', movieRouter);
app.use('/', homeRouter)

// untuk dipindah ke router dan controler
// app.get('/movies', (req, res) => {
//     res.render('movies/index')
// })



app.listen(PORT, () => console.log(`heard on ${PORT}`))