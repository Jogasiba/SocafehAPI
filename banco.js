import { Sequelize, DataTypes } from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize('bancoSocafeh', 'postgres', 'Socafeh123', {
    host: process.env.DB_URL,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});

export default sequelize;
