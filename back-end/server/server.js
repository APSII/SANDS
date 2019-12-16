const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./app/routes')

app.use(bodyParser.json())
app.use('/api', routes)

const server = app.listen(3333, ()=>{
    console.log("App listening at "+3333);
    
})