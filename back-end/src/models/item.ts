'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = require('sequelize')
// module.exports = (sequelize, DataTypes) => {
class Item extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
    Item.belongsToMany(models.Order, {
      foreignKey: 'order_id',
      as: 'orders',
      through: models.OrderItem
    })
  }
}

export interface ItemAttributes {
  item_id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface ItemInstance extends Model<ItemAttributes>, ItemAttributes {}

export const ItemModel = Item.init({
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Item',
  tableName: 'items',
  timestamps: false
});

export default Item