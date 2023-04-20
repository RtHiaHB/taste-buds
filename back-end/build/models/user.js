'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const order_1 = __importDefault(require("./order"));
class User extends sequelize_1.Model {
    static associate(User) {
        User.hasMany(order_1.default, {
            foreignKey: 'user_id',
            as: 'orders'
        });
    }
    static initModel(sequelize) {
        User.init({
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: false
        });
    }
}
exports.default = User;
