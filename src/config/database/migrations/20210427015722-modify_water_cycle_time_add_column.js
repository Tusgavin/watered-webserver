'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'water_cycle_time',
      'created_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
    await queryInterface.addColumn(
      'water_cycle_time',
      'updated_at',
      {
        type: Sequelize.DATE,
        allowNull: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('water_cycle_time', 'created_at');
    await queryInterface.removeColumn('water_cycle_time', 'updated_at');
  }
};
