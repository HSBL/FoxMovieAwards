'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      title: 'Avenger Endgame',
      duration: 110,
      url: 'TcMBFSGVi1c',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Joker',
      duration: 106,
      url: 'zAGVQLHvwOY',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Spider-Man: Into the Spider-Verse',
      duration: 100,
      url: 'tg52up16eq0',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
