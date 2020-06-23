const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())
// O consign() atravez do includes() pega as app/routes e com o 
// into(app) disponibiliza no servidor para o app.js
// Fazendo assim um autoload.
consign()
    .include('app/routes')
    .then('config/dbConnections.js')
    .then('app/models')
    .into(app)


module.exports = app