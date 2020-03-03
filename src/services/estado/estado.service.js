// Initializes the `estado` service on path `/estado`
const { Estado } = require('./estado.class');
const createModel = require('../../models/estado.model');
const hooks = require('./estado.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false/*app.get('paginate')*/
  };

  // Initialize our service with any options it requires
  app.use('/estado', new Estado(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('estado');

  service.hooks(hooks);
};
