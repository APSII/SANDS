// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const sort =
      context.params && context.params.query && context.params.query.$sort;

    if (sort) {
      const sortBy = Object.entries(JSON.parse(sort)).map(([key, value]) => [
        key,
        value
      ]);
      context.params.sequelize = {
        ...context.params.sequelize,
        order: sortBy
      };
      delete context.params.query.$sort;
    }

    return context;
  };
};
