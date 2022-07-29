import DatabaseMetodos from "../utils/DatabaseMetodos.js";
import ValidacoesServices from "../services/ValidacoesServices.js";

class Turmas {
  static rotas(app) {
    app.get("/turmas", async (req, res) => {
      res.send("Funcionando");
    });

    app.get("/turmas/:id", async (req, res) => {});

    app.post("/turmas", async (req, res) => {});

    app.put("/turmas/:id", (req, res) => {});

    app.delete("/turmas/:id", async (req, res) => {});
  }
}

export default Cursos;
