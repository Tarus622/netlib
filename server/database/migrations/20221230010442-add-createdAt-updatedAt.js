'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('genres', 'createdAt', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('genres', 'updatedAt', {
          type: Sequelize.DataTypes.DATE,
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('genres', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('genres', 'updatedAt', { transaction: t })
      ]);
    });
  }
    
};
