import { DataTypes } from "sequelize";
import banco from "../banco.js"

export default banco.define(
    'item_pedido',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        ped_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        ite_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }
);