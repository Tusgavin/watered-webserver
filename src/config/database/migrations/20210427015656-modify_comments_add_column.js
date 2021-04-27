'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'comments',
      'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
    await queryInterface.addColumn(
      'comments',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('comments', 'created_at');
    await queryInterface.removeColumn('comments', 'updated_at');
  }
};
