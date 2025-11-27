import { DataTypes } from "sequelize";
import banco from "../banco.js"

export default banco.define(
    'itens',
    {
        ite_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        preco: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }
);