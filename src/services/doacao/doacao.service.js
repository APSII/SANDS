// Initializes the `doacao` service on path `/doacao`
const { Doacao } = require('./doacao.class');
const createModel = require('../../models/doacao.model');
const hooks = require('./doacao.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/doacao', new Doacao(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('doacao');

  service.hooks(hooks);
};
