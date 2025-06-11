// src/models/Reserve.ts

import { DataTypes, Model } from 'sequelize';
import {UUIDTypes, v4 as uuidv4} from 'uuid';
import {sequelize} from '../config/database';




class Reserve extends Model {
    static reserve(reserveData: { id: string, id_car: number, id_user: number, reserve_init: string, reserve_end: string  }): any {
        throw new Error("Method not implemented");
    }
    public id!: number;
    public id_car!: number;
    public id_user!: number;
    public reserve_init!: string;
    public reserve_end!: string;

}

Reserve.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    id_car: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reserve_init: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reserve_end: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Reserve',
    tableName: 'reserves',
    timestamps: false,
})