const express = require('express')
const routes = express.Router()
const Usuario = require('../app/controller/usuario')

routes.get('/usuarios', Usuario.index)
routes.post('/usuarios', Usuario.createUser)
routes.get('/usuarios/:id', Usuario.findone)/*
routes.put('/usuarios/:id', Usuario.update);
routes.delete('/usuarios/:id', Usuario.destroy);*/

module.exports = routes