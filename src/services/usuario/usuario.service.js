
// Initializes the `Usuario` service on path `/usuario`
const { Usuario } = require('./usuario.class');
const createModel = require('../../models/usuario.model');
const hooks = require('./usuario.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/usuario', new Usuario(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('usuario');

  service.hooks(hooks);
};
