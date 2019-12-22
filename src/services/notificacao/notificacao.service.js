// Initializes the `notificacao` service on path `/notificacao`
const { Notificacao } = require('./notificacao.class');
const createModel = require('../../models/notificacao.model');
const hooks = require('./notificacao.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/notificacao', new Notificacao(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('notificacao');

  service.hooks(hooks);
};
