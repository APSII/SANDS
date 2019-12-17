'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doacao = sequelize.define('Doacao', {
    usuarioId: DataTypes.INTEGER,
    doadorId: DataTypes.INTEGER,
    identificacao: DataTypes.STRING,
    dataUso: DataTypes.DATE,
    usado: DataTypes.BOOLEAN,
    ativo: DataTypes.BOOLEAN
  }, {});
  Doacao.associate = function(models) {
    /*User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})*/
    Doacao.belongsTo(models.Doador, {foreignKey: 'doadorId', as: 'doador'})
    Doacao.belongsTo(models.Usuario, {foreignKey: 'usuarioId', as: 'usuario'})
  };
  return Doacao;
};