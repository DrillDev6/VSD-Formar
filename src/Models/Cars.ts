// src/models/Cars.ts

import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../config/database';



class Car extends Model {
    static registry(carsData: { brand: string; model: string; year: number; plate: string; chassi: string; }) {
        throw new Error("Method not implemented.");
    }
    public id!: number;
    public brand!: string;
    public model!: string;
    public year!: number;
    public plate!: string;
    public chassi!: string;
    public color?: string;
}

Car.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
},
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
},
    model: {
        type: DataTypes.STRING,
        allowNull: false
},

    year:{
       type: DataTypes.INTEGER,
       allowNull: false

},
    plate:{
       type: DataTypes.STRING,
       allowNull: false,
       unique: true,

}, 
    chassi:{
       type: DataTypes.STRING,
       allowNull: false,
       unique: true

    },
    color:{
        type: DataTypes.STRING,
        allowNull: true
        
    },
}, 
{
    sequelize,
    modelName: 'Cars',
    tableName: 'cars',
    timestamps: true     
});
 export default  Car