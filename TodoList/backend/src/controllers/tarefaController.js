import Tarefa from "../models/tarefaModel.js";
import { z } from "zod";

const createSchema = z.object({
    tarefa: z.string({
        invalid_type_error: "A tarefa deve ser um texto",
        required_error: "Tarefa é obrigatória"
    })
        .min(3, { message: "A tarefa deve conter pelo menos 3 caracteres" })
        .max(255, { message: "A tarefa deve conter no máximo 255 caracteres" }),
    descricao: z.string()
        .min(5, { message: "A descrição deve conter no mínimo 5 caracteres" })
        .nullable(),
});

export const create = async (request, response) => {
    const createValidation = createSchema.safeParse(request.body);
    if (!createValidation.success) {
        return response.status(400).json(createValidation.error);
    }

    const { tarefa, descricao } = createValidation.data;
    const novaTarefa = { tarefa, descricao };

    try {
        const addTarefa = await Tarefa.create(novaTarefa);
        response.status(201).json({ message: "Tarefa criada", addTarefa });
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: "Erro ao criar tarefa" });
    }
};

export const getAll = async (request, response) => {

    try {
        const tarefas = await Tarefa.findAll();//select * from tabela
        response.status(200).json(tarefas);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Error ao buscar a tarefas", error });
    }

};

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