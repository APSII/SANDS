// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const hemocentro = sequelizeClient.define('hemocentro', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      type: Sequelize.STRING
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
  hemocentro.associate = function ({ usuario, endereco }) {
    // Define associations here
    hemocentro.hasMany(usuario,{
      foreignKey: {
        allowNull: false
      }
    }); 
    hemocentro.belongsTo(endereco);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return hemocentro;
};
