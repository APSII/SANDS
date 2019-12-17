'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Doacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'usuario',
            key: 'id'
          }
      },
      doadorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'doador',
          key: 'id'
        }
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Doacaos');
  }
};