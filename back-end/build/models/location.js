'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Location extends sequelize_1.Model {
    static associate(models) {
        Location.hasMany(models.Order, {
            foreignKey: 'loc_id',
            as: 'orders',
        });
    }
    static initModel(sequelize) {
        Location.init({
            loc_id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            address: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize,
            modelName: 'Location',
            tableName: 'locations',
            timestamps: false,
        });
    }
}
exports.default = Location;
