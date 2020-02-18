// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const sequelize = context.app.get("sequelizeClient");
    const include =
      context.params && context.params.query && context.params.query.$include;

    const addInclude = include => {
      if (!include.includes("."))
        return {
          model: sequelize.models[include]
        };
      const splitedInclude = include.split(".");
      return {
        model: sequelize.models[splitedInclude.shift()],
        include: addInclude(splitedInclude.join("."))
      };
    };

    if (include) {
      const includes = include ? include.split("|") : [];
      context.params.sequelize = {
        include: includes.map(include => addInclude(include)),
        raw: false
      };
      delete context.params.query.$include;
    }
    return context;
  };
};
