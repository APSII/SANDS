// Initializes the `doador` service on path `/doador`
const { Doador } = require('./doador.class');
const createModel = require('../../models/doador.model');
const hooks = require('./doador.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/doador', new Doador(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('doador');

  service.hooks(hooks);
};
