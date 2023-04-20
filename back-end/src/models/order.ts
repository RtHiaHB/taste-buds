'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';
import User from './user';
import Item from './item';
import Location from './location';

interface OrderAttributes {
  order_id: number;
  user_id: number;
  loc_id: number;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public order_id!: number;
  public user_id!: number;
  public loc_id!: number;

  public static associate(models: {
    User: typeof User;
    Item: typeof Item;
    Location: typeof Location;
  }) {
    Order.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users'
    });
    Order.belongsTo(models.Location, {
      foreignKey: 'loc_id',
      as: 'locations'
    });
    Order.belongsToMany(models.Item, {
      through: 'order_items',
      foreignKey: 'order_id',
      otherKey: 'item_id',
      as: 'items'
    });
  }

  public static initModel(sequelize: Sequelize): void {
    Order.init(
      {
        order_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type:DataTypes.INTEGER,
          allowNull: false,
        },
        loc_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      }, {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        timestamps: false
      }
    );
  }
}

export default Order;