'use strict';
const {
  Model
} = require('sequelize');
const order_item = require('./order_item');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'users'
      })
      Order.belongsTo(Location, {
        foreignKey: 'loc_id',
        as: 'locations'
      })
      Order.belongsToMany(Item, {
        foreignKey: 'item_id',
        as: 'items',
        through: 'order_items'
      })
    }
  }
  Order.init({
    order_id: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    loc_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false
  });
  return Order;
};