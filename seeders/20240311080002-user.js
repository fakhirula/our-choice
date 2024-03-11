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
          role: 'admin',
          is_active: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          username: 'manager',
          email: 'manager@gmail.com',
          password: 'manager',
          role: 'manager',
          is_active: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          username: 'student',
          email: 'student@gmail.com',
          password: 'student',
          role: 'student',
          is_active: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
