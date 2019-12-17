'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doador = sequelize.define('Doador', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {});
  Doador.associate = function(models) {
    // associations can be defined here
  };
  return Doador;
};