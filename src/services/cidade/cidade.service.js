// Initializes the `cidade` service on path `/cidade`
const { Cidade } = require('./cidade.class');
const createModel = require('../../models/cidade.model');
const hooks = require('./cidade.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: false/*app.get('paginate')*/
  };

  // Initialize our service with any options it requires
  app.use('/cidade', new Cidade(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cidade');

  service.hooks(hooks);
};
