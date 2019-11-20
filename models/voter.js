'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Voter extends Model {}
  Voter.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(value) {
          return Voter.findOne({where: {email: value}})
          .then(found => {
            if (found) throw new Error('Email has been registered!');
          });
        }
      }
    },
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    isLogin: DataTypes.INTEGER
  }, {sequelize, modelName: 'Voter'});
  Voter.associate = function(models) {
    // associations can be defined here
  };
  return Voter;
};