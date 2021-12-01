'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Todos', [{
      title: "todo 1",
      description : "learn sequelize init",
      startTime : new Date(),
      status : 'false',
      createdAt : new Date(),
      updatedAt: new Date()
    }, {
      title: "todo 2",
      description : "learn sequelize generate model and seeding",
      startTime : new Date(),
      status : 'false',
      createdAt : new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Todos', null, {})
  }
};
