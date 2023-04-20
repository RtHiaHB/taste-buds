'use strict';
/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from 'sequelize';
import { Migration } from 'sequelize-cli';

const migration: Migration = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('Order_items', {
      order_items_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable('Order_items');
  }
};

export default migration;