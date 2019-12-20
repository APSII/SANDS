// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const doacao = sequelizeClient.define('doacao', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    identificacao: {
      type: Sequelize.STRING
    },
    dataUso: {
      type: Sequelize.DATE
    },
    usado: {
      type: Sequelize.BOOLEAN
    },
    ativo: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  doacao.associate = function ({notificacao, doador}) {
    // Define associations here
    doacao.hasMany(notificacao); 
    doacao.belongsTo(doador);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return doacao;
};
