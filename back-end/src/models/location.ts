'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize'

interface LocationAttributes {
  loc_id: number;
  address: string;
  city: string;
  state: string;
}

class Location extends Model<LocationAttributes> implements LocationAttributes {
  public loc_id!: number;
  public address!: string;
  public city!: string;
  public state!: string;
  public static associate(models: any): void {
    Location.hasMany(models.Order, {
      foreignKey: 'loc_id',
      as: 'orders',
    });
  }

  public static initModel(sequelize: Sequelize): void {
    Location. init(
      {
        loc_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      }, {
        sequelize,
        modelName: 'Location',
        tableName: 'locations',
        timestamps: false,
      }
    );
  }
}

export default Location;