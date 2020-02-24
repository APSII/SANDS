// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const query = context.params && context.params.query;
    const normalFilters = {};
    console.log(query);

    Object.entries(query).forEach(([key, value]) => {
      if (!key.includes("$") && value) {
        normalFilters[key] = value;
      }
    });
    console.log("TCL: normalFilters", normalFilters);

    if (query.$like) {
      const { Op } = require("sequelize");
      const likeFilters = {};
      Object.entries(JSON.parse(query.$like)).forEach(([key, value]) => {
        if (value) return (likeFilters[key] = { [Op.iLike]: `%${value}%` });
      });
      console.log("TCL: likeFilters", likeFilters);

      context.params.sequelize = {
        ...context.params.sequelize,
        where: { ...likeFilters, ...normalFilters }
      };
      delete context.params.query.$like;
    }

    return context;
  };
};
