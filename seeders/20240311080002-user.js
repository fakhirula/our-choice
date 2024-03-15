'use strict';

const { v4 } = require('uuid')
const bcrypt = require('bcrypt')

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
    const salt = await bcrypt.genSaltSync(10)

    const adminRole = await queryInterface.rawSelect('roles', {
      where: {
        name: 'admin'
      }
    }, ['id'])

    const officerRole = await queryInterface.rawSelect('roles', {
      where: {
        name: 'officer'
      }
    }, ['id'])

    await queryInterface.bulkInsert('Users', 
      [
        {
          id: v4(),
          username: 'admin',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('admin', salt),
          is_active: '1',
          role_id: adminRole
        },
        {
          id: v4(),
          username: 'officer',
          email: 'officer@gmail.com',
          password: bcrypt.hashSync('officer', salt),
          is_active: '1',
          role_id: officerRole
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
