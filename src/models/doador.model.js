// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const doador = sequelizeClient.define('doador', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.STRING
    },
    dataNascimento: {
      type: Sequelize.DATE
    },
    telefone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    ativo: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
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
  doador.associate = function ({doacao}) {
    // Define associations here
    doador.hasMany(doacao); 
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return doador;
};
