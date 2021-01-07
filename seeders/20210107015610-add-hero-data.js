'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Heroes', [
      {
        name: 'Wonder Woman',
        power: 'Strength',
        affiliation: 'DC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harley Quinn',
        power: 'Weirdness',
        affiliation: 'DC',
        createdAt: new Date(),
        updatedAt: new Date()          
      },
      {
        name: 'Spider-Man',
        power: 'Spidey Senses',
        affiliation: 'Marvel',
        createdAt: new Date(),
        updatedAt: new Date()          
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Heroes');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
