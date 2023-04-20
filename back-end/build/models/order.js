'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
    static associate(models) {
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
    static initModel(sequelize) {
        Order.init({
            order_id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            loc_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Order',
            tableName: 'orders',
            timestamps: false
        });
    }
}
exports.default = Order;
