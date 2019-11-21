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
  }, { 
    hooks: {
      beforeCreate: (instance, options) => {
        return Vote.findOne({
          where: {
            CategoryId: instance.CategoryId,
            VoterId: instance.VoterId
          }
        })
        .then(vote => {
          if (vote) {
            throw new Error('You have already voted for that category')
          }
        })
      }
    },
    sequelize, modelName: 'Vote'});
  Vote.associate = function(models) {
    // associations can be defined here
    Vote.belongsTo(models.Movie)
    Vote.belongsTo(models.Category)
  };
  return Vote;
};