import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
   //config
    host: 'localhost',
    username: 'adrieladm',
    password: '123456',
    database: 'postgres_agender'
});
