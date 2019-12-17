const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Rotas
const index = require('./app/routes/index');
const usuario = require('./app/routes/usuario');
const hemocentro = require('./app/routes/hemocentro');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/usuario', usuario);
app.use('/hemocentro', hemocentro);

app.use(bodyParser.json())


const server = app.listen(3333, ()=>{
    console.log("App listening at "+3333);
    
})

module.exports = app;