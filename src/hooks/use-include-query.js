// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const include =
      context.params && context.params.query && context.params.query.$include

    if (include) {
      const includes = include ? include.split('|') : []
      const sequelize = context.app.get('sequelizeClient')
      context.params.sequelize = {
        include: includes.map(include => sequelize.models[include]),
        raw: false
      }
      delete context.params.query.$include
    }

    return context
  }
};
