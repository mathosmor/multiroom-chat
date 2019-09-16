const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const expressValidator = require('express-validator');

const app = express();

// configuração ejs -> setar as variáveis 'view engine' e 'views' do express 
app.set('view engine', 'ejs');
app.set('views', './app/views')

consign()

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;