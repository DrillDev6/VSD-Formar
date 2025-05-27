import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
   //config
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'postgres_agender'
});
