'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';
import Order from './order'

interface UserAttributes {
  user_id: number;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public user_id!: number;
  public email!: string;
  public password!: string;

  public static associate(User: any) {
    User.hasMany(Order, {
      foreignKey: 'user_id',
      as: 'orders'
    })
  }

  public static initModel(sequelize: Sequelize): void {
    User.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false
      }
    )
  }
}

export default User