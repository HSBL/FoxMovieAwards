'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Category extends Model {}
  Category.init({
    name: DataTypes.STRING
  }, {sequelize, modelName: 'Category'});
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.Movie, {through : models.CategoryMovies})
    Category.hasMany(models.Vote)
  };
  return Category;
};