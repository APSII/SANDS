// Initializes the `endereco` service on path `/endereco`
const { Endereco } = require('./endereco.class');
const createModel = require('../../models/endereco.model');
const hooks = require('./endereco.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/endereco', new Endereco(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('endereco');

  service.hooks(hooks);
};
