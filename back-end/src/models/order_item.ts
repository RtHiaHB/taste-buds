'use strict';
import { Model, Optional, DataTypes } from 'sequelize';
const sequelize = require('sequelize')

interface OrderItemAttributes {
  order_items_id: number;
  item_id: number;
  qty: number;
  order_id: number;
}

interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, 'order_items_id'> {}

class Order_item extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
  public order_items_id!: number;
  public item_id!: number;
  public qty!: number;
  public order_id!: number;

  static associate(models: any) {
    Order_item.hasOne(models.Order, {
      foreignKey: 'order_id',
      as: 'order'
    });
    Order_item.hasOne(models.Item), {
      foreignKey: 'item_id',
      as: 'order_item'
    }
  }
}

Order_item.init({
  order_items_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }

}, {
  sequelize,
  modelName: 'Order_item',
});

export default Order_item;