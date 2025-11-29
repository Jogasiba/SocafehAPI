import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('bancoSocafeh', 'postgres', 'Socafeh123', {
    host: 'database-1.cvmu0ukcqmtc.us-east-2.rds.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // evita erro de certificado
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});

export default sequelize;
