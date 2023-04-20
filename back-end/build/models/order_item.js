'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = require('sequelize');
class Order_item extends sequelize_1.Model {
    static associate(models) {
        Order_item.hasOne(models.Order, {
            foreignKey: 'order_id',
            as: 'order'
        });
        Order_item.hasOne(models.Item), {
            foreignKey: 'item_id',
            as: 'order_item'
        };
    }
}
Order_item.init({
    order_items_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    qty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    order_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Order_item',
});
exports.default = Order_item;
