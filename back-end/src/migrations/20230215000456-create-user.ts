'use strict';
/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from 'sequelize';
import { Migration } from 'sequelize-cli'
const migration: Migration = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface:QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable('users');
  }
};

export default migration;