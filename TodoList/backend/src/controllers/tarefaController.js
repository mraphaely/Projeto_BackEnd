import Tarefa from "../models/tarefaModel.js";
import { z } from "zod";

export const create = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

export const getAll = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

export const getTarefa = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

export const updateTarefa = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

export const updateStatusTarefa = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

export const getTarefaStatus = async (request, response) => {
    response.status(200).json("Chegou no controlador");
}

// export const getTarefaStatus = async (request, response) => {
//     response.status(200).json("Chegou no controlador");
// }