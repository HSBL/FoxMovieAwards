const express = require('express')
const app = express()
const PORT = 3000

const voterRouter = require('./routes/voterRoutes');
const helper = require('./helpers/helpers');

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.locals.helper = helper;

app.get('/', (req, res) => {
    res.render('index')
})
app.use('/voter', voterRouter)


app.listen(PORT, () => console.log(`heard on ${PORT}`))