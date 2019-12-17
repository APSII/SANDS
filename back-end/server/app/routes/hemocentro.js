const express = require('express')
const routes = express.Router()
const Hemocentro = require('../controller/hemocentro')

routes.get('/', Hemocentro.index)
routes.post('/', Hemocentro.create)
routes.get('/:id', Hemocentro.findone)
routes.put('/:id', Hemocentro.update);
routes.delete('/:id', Hemocentro.destroy);

module.exports = routes;