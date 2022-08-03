import express from "express";
import * as dotenv from "dotenv";
import Alunos from "./src/controllers/Alunos.js";
import Cursos from "./src/controllers/Cursos.js";
import Empresa from "./src/controllers/Empresa.js";
import Formacao from "./src/controllers/Formacao.js";
import Matricula from "./src/controllers/Matricula.js";
import Turmas from "./src/controllers/Turmas.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

app.use(express.json());

Alunos.rotas(app);
Cursos.rotas(app);
Empresa.rotas(app);
Formacao.rotas(app)
Matricula.rotas(app);
Turmas.rotas(app);


export default app