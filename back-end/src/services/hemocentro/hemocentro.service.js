// Initializes the `hemocentro` service on path `/hemocentro`
const { Hemocentro } = require('./hemocentro.class');
const createModel = require('../../models/hemocentro.model');
const hooks = require('./hemocentro.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hemocentro', new Hemocentro(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hemocentro');

  service.hooks(hooks);
};
