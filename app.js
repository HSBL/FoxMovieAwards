const express = require('express')
const app = express()
const PORT = 3000

const voterRouter = require('./routes/voterRoutes')

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})
app.use('/voter', voterRouter)


// untuk dipindah ke router dan controler
app.get('/movies', (req, res) => {
    res.render('movies/index')
})



app.listen(PORT, () => console.log(`heard on ${PORT}`))