'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Best Picture',
      updatedAt: new Date(),
      createdAt: new Date()
    },{
      name: 'Best Soundtrack',
      updatedAt: new Date(),
      createdAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
