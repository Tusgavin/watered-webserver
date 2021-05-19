'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [ {
      username: 'teste1',
      first_name: 'tester',
      last_name: 'one',
      email: 'teste1@teste1.com',
      password: '$2y$08$EEDkHQR4jJiCprUHUZXlHeuK3h5Hb27Lcufd5kbev/tnrjxCBZNUm',
      birthdate: '02/02/1900',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      username: 'teste2',
      first_name: 'tester',
      last_name: 'two',
      email: 'teste2@teste2.com',
      password: '$2y$08$EEDkHQR4jJiCprUHUZXlHeuK3h5Hb27Lcufd5kbev/tnrjxCBZNUm',
      birthdate: '03/03/1900',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
