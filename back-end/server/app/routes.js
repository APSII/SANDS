const express = require('express')
const routes = express.Router()
const Usuario = require('./controller/usuario')

routes.get('/usuarios', Usuario.index)
routes.post('/usuario', Usuario.createUser)

module.exports = routes