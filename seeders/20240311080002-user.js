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
    return queryInterface.bulkInsert('Users', 
      [
        {
          id: 1,
          username: 'admin',
          email: 'admin@gmail.com',
          password: 'admin',
          is_active: '1',
          role_id: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          username: 'officer',
          email: 'officer@gmail.com',
          password: 'officer',
          is_active: '1',
          role_id: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          username: 'student',
          email: 'student@gmail.com',
          password: 'student',
          is_active: '1',
          role_id: null,
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
