'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoryMovies', [{
      CategoryId: 1,
      MovieId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      CategoryId: 1,
      MovieId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      CategoryId: 2,
      MovieId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      CategoryId: 2,
      MovieId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoryMovies', null, {});
  }
};
