'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:

    */
    await queryInterface.bulkInsert('User',
      [
        {
          email: 'lamvinhkien@gmail.com',
          password: "123",
          username: "fake1",
        },
        {
          email: 'lamvinhkien@gmail.com2',
          password: "123",
          username: "fake2",
        },
        {
          email: 'lamvinhkien@gmail.com3',
          password: "123",
          username: "fake3",
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
