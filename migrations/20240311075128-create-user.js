'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      password:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      is_active: {
          type: Sequelize.ENUM('0', '1'),
          defaultValue: '0'
      },
      role_id: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: 'Roles',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};