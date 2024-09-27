import { request } from "express";
import Users from "../model/user-model.js";
import bycrypt from "bcrypt";

export const createUser = (request, response) => {

    const { username, email, password } = request.body

    try {
        Users.create({
            username,
            email,
            password
        });
        response.status(201).json("User successfully registered!")
    } catch (error) {
        response.status(500).json({ error: error.message});
    }
}

export const loginUser = (request, response) => {
    const { email, password } = request.body
    
    try {
        const user = Users.findOne({ where: {email} });
        if (!user) {
           return response.status(404).json({ error: "User not found" });
        }

        const isMatch = bycrypt.compare(password, user.password)
        if (!isMatch) {
            return response.status(401).json({ error: "Invalid password" });
        }
        response.status(200).json("Login successfully completed");

    } catch (error) {
        response.status(500).json(error);
    }
}