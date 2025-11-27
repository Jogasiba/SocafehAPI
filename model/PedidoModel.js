import { DataTypes } from "sequelize";
import banco from "../banco.js"

export default banco.define(
    'pedidos',
    {
        ped_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        com_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }
);