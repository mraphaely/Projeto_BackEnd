import conn from "../config/conn.js";
import { DataTypes } from "sequelize";
import byCrypt from 'bcrypt'

const Users = conn.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Users.beforeCreate( async (user) => {
    const salt = await byCrypt.genSalt(10);
    user.password = await byCrypt.hash(user.password, salt);
    
});

const syncDataBase = async () => {
    try {
        await conn.authenticate();
        console.log("Successfully established connection dataBase!");

        await Users.sync();
        console.log("User table created successfully!")
    } catch (error) {
        console.log("Error connecting to the table!", error);
    }
}

syncDataBase();

export default Users;