'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      {
        description: 'Aaaaaaaaaaaa',
        code: 'DIMAfasfasfasdf',
        price: 5.40,
        createdAt: '20171112',
        updatedAt: '20171112'
      },
      {
        description: 'Bbbbbb',
        code: 'DIMAoppojhj',
        price: 6.30,
        createdAt: '20171112',
        updatedAt: '20171112'
      },
      {
        description: 'POSDS',
        code: 'OAAAAAAA',
        price: 12,
        createdAt: '20171112',
        updatedAt: '20171112'
      },
      {
        description: 'OIUuasfasdfasfas',
        code: 'NMNAAAA',
        price: 90,
        createdAt: '20171112',
        updatedAt: '20171112'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
      return queryInterface.bulkDelete('Product', null, {});
  }
};
