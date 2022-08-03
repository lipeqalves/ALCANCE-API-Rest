import express from "express";
import * as dotenv from "dotenv";
import Alunos from "./src/controllers/Alunos.js";
import Cursos from "./src/controllers/Cursos.js";
import Empresa from "./src/controllers/Empresa.js";
import Formacao from "./src/controllers/Formacao.js";
import Matricula from "./src/controllers/Matricula.js";
<<<<<<< HEAD
import Professores from "./src/controllers/Professores.js";
=======
import Turmas from "./src/controllers/Turmas.js";
>>>>>>> ebbf26b355e7e2d2ec1b42daf3bc648bd7438513

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
<<<<<<< HEAD
Professores.rotas(app);
=======
Turmas.rotas(app);

>>>>>>> ebbf26b355e7e2d2ec1b42daf3bc648bd7438513

export default app