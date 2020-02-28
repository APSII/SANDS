// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const endereco = sequelizeClient.define('endereco', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    endereco: {
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
  endereco.associate = function ({hemocentro, cidade}) {
    // Define associations here
    endereco.hasMany(hemocentro,{
      foreignKey: {
        allowNull: false
      }
    }); 
    endereco.belongsTo(cidade);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return endereco;
};
