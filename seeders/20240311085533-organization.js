'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Organizations', 
      [
        {
          id: 1,
          name: 'BEM',
          logo: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'DPM',
          logo: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'SENADA',
          logo: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'HMPSTI',
          logo: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'HMPSSI',
          logo: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};
