'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

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
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'This email is already taken. Please choose a different email.'
      },
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    role_id: {
      type: DataTypes.UUID
    },
    is_active: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10)
          user.password = bcrypt.hashSync(user.password, salt)
        }

        if (!user.role_id) {
          const roleUser = await sequelize.models.Role.findOne({
            where: {
              name: 'student'
            }
          })

          user.role_id = roleUser.id
        }

      }
    },
    sequelize,
    modelName: 'User',
  });

  User.prototype.CorrectPassword = async (reqPassword, dbPassword) => {
    return await bcrypt.compareSync(reqPassword, dbPassword)
  }

  return User;
};