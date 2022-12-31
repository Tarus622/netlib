'use strict';

/* @type {import('sequelize-cli').Migration} */

/*
module.exports = {
    up: async (queryInterface, Sequelize) => {      
      await queryInterface.createTable('books', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false        
      },
      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false        
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
          type: Sequelize.STRING
      },
      rating: {
          type: Sequelize.DECIMAL,
          allowNull: true
      },
      genre_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      image: {
          type: Sequelize.STRING
      }
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};*/
