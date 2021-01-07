'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Sidekicks', [
      {
        name: 'Steve',
        power: 'Pilot',
        affiliation: 'DC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joker',
        power: 'lil bit crazy',
        affiliation: 'DC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uncle Ben',
        power: 'just an uncle',
        affiliation: 'Marvel',
        createdAt: new Date(),
        updatedAt: new Date()
      },     
      {
        name: 'Baby Yoda',
        power: 'jedi',
        affiliation: 'Star Wars',
        createdAt: new Date(),
        updatedAt: new Date()
      },       
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Sidekicks');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
