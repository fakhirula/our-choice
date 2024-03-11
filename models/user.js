'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'This username is already taken. Please choose a different username.'
      },
      validate: {
        notNull: {
          msg: 'Username is required.'
        },
        notEmpty: {
          msg: 'Username is required.'
        }
      }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'manager', 'student'),
    is_active: DataTypes.ENUM('0','1')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};