import express from "express";
import cors from "cors";

import conn from "./config/conn.js"

import Tarefa from "./models/tarefaModel.js";

import tarefaRouter from "./routes/tarefaRouter.js";

const app = express();

//3 middleswares para a api funcionar corretamente.
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Necessário para sincronizar os arquivos models no projeto
conn.sync(/*{ force: true }*/).then(() => {
    console.log('Conectado!')
}).catch((error) => console.error(error));

app.use("/api/tarefas", tarefaRouter)

app.use((request, response) => {
    response.status(404).json({ message: "Rota não encontrada." });
});

export default app;