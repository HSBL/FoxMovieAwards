'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class CategoryMovies extends Model {}
  CategoryMovies.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    CategoryId: DataTypes.INTEGER,
    VoterId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {sequelize, modelName: 'CategoryMovies'});
  CategoryMovies.associate = function(models) {
    // associations can be defined here
  };
  return CategoryMovies;
};