'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    identificador: DataTypes.STRING,
    hemocentroId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};