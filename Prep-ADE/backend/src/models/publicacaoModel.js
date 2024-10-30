import { DataTypes } from "sequelize";
import conn from "../config/connDB.js";

import Empresa from "./empresaModel.js";

const Publicacao = conn.define("publicacoes", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// 1 : n
Empresa.hasMany(Publicacao, {
    foreignKey: "id_empresa"
});
Publicacao.belongsTo(Empresa, {
    foreignKey: "id_empresa"
});

export default Publicacao;