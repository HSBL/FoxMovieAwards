'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Vote extends Model {}
  Vote.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    CategoryId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    VoterId: DataTypes.INTEGER
  }, { sequelize, modelName: 'Vote'});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};