import { DataTypes } from "sequelize";
import banco from "../banco.js"

export default banco.define(
    'usuarios',
    {
        usu_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        login: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }
);