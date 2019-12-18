const express = require('express')
const routes = express.Router()
const Doador = require('../controller/doador')

routes.get('/', Doador.index)
routes.post('/', Doador.create)
routes.get('/:id', Doador.findone)
routes.put('/:id', Doador.update);
routes.delete('/:id', Doador.destroy);

module.exports = routes;