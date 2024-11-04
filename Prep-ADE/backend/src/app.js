import express, { request } from "express";
import cors from "cors";

import conn from "./config/connDB.js";
import Empresa from "./models/empresaModel.js";
import Usuarios from "./models/usuarioModel.js";
import Curtida from "./models/curtidaModel.js";
import Comentario from "./models/comentarioModel.js";

import EmpresaRouter from "./routes/empresaRouter.js";
import PublicacaoRouter from "./routes/publicacaoRouter.js";

const app  = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

conn.sync(/*{force: true}*/)
    .then() 
    .catch((error) => console.error(error));
    
app.use("/api/empresas", EmpresaRouter);
app.use("/api/publicacoes", PublicacaoRouter);
    
app.use((request, response) => {
    response.status(404).send({ message: "Not found" });
});

export default app;