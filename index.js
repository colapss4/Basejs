const express = require('express')
const app = express()

require('dotenv').config()

const helpers = require('./helpers/handlebars')
const { engine } = require('express-handlebars')

app.engine('handlebars', engine({
    helpers:helpers
}))

app.set('view engine', 'handlebars')

const routes = require('./routes/routes')


app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(process.env.PORTA, () => (
    console.log('server rodando na porta')
))