'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
class Item extends sequelize_1.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Item.belongsToMany(models.Order, {
            foreignKey: 'order_id',
            as: 'orders',
            through: models.OrderItem
        });
    }
}
exports.ItemModel = Item.init({
    item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: false
});
exports.default = Item;
