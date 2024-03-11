'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organization.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required.'
        },
        notEmpty: {
          msg: 'Name is required.'
        }
      }
    },
    logo: DataTypes.STRING
  }, {
    // hooks: {
    //   afterValidate: (organization, options) => {
    //     organization.name = organization.name.toLowerCase();
    //   }
    // },
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};