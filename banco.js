import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('rdsadmin', 'postgres', 'Socafeh123', {
    host: 'database-1.cvmu0ukcqmtc.us-east-2.rds.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});


export default sequelize;




