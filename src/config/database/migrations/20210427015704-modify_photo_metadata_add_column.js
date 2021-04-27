'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'photos_metadata',
      'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
    await queryInterface.addColumn(
      'photos_metadata',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('photos_metadata', 'created_at');
    await queryInterface.removeColumn('photos_metadata', 'updated_at');
  }
};
