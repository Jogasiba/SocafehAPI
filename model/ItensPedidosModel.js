import { DataTypes } from "sequelize";
import banco from "../banco.js"

export default banco.define(
    'item_pedido',
    {
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