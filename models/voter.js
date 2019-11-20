'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Voter extends Model {}
  Voter.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize, modelName: 'Voter'});
  Voter.associate = function(models) {
    // associations can be defined here
  };
  return Voter;
};