// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const notificacao = sequelizeClient.define('notificacao', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    mensagem: {
      type: Sequelize.TEXT
    },
    anexoUrl: {
      type: Sequelize.STRING
    },
    enviado: {
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
  notificacao.associate = function ({doacao}) {
    // Define associations here
    notificacao.belongsTo(doacao);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return notificacao;
};
