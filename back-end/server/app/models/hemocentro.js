'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hemocentro = sequelize.define('Hemocentro', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {});
  Hemocentro.associate = function(models) {
    // associations can be defined here
  };
  return Hemocentro;
};