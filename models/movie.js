'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Movie extends Model {}
  Movie.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {sequelize, modelName: 'Movie'});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.Category, {through : models.CategoryMovies})
    Movie.hasMany(models.Vote)
  };
  return Movie;
};