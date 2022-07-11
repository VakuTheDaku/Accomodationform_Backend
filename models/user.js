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
    name: { 
      type:DataTypes.STRING,
      
    },
    gender: DataTypes.STRING,
    clg_name: DataTypes.STRING,
    contact_number : DataTypes.STRING,
    registered_event: DataTypes.STRING,
    entry_date: DataTypes.STRING,
    exit_date: DataTypes.STRING
  },
  
  
  
  
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};