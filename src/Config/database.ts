import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('vemserdev', 'adriel', 'adriel123', {
  host: 'localhost',
  dialect: 'postgres'
});
