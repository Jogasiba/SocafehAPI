import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('Banco_Cafeteria', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});

export default sequelize;