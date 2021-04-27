'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'plants',
      'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
    await queryInterface.addColumn(
      'plants',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('plants', 'created_at');
    await queryInterface.removeColumn('plants', 'updated_at');
  }
};
