import { DataTypes } from "sequelize";
import banco from "../banco.js"

export default banco.define(
    'comandas',
    {
        com_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        mesa: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }
);