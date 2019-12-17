const express = require('express')
const routes = express.Router()
const Usuario = require('../controller/usuario')

routes.get('/', Usuario.index)
routes.post('/', Usuario.create)
routes.get('/:id', Usuario.findone)
routes.put('/:id', Usuario.update);
routes.delete('/:id', Usuario.destroy);

module.exports = routes;