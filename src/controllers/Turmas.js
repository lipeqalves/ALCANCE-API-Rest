import DatabaseTurmasMetodos from "../DAO/DatabaseTurmasMetodos.js";
import ValidacoesServices from "../services/ValidacoesServices.js";
import TurmasModel from "../models/TurmasModels.js";

class Turmas {
  static rotas(app) {
    app.get("/turmas", async (req, res) => {
      const response = await DatabaseTurmasMetodos.listarTurmas();
      res.status(200).json(response);
    });

    app.get("/turmas/:id", async (req, res) => {
      const response = await DatabaseTurmasMetodos.listarTurmasPorId(
        req.params.id
      );
      res.status(200).json(response);
    });

    app.post("/turmas", async (req, res) => {
      try {
        const turma = new TurmasModel(...Object.values(req.body));
        const response = await DatabaseTurmasMetodos.inserirTurmas(turma);
        res.status(201).json(response);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    app.put("/turmas/:id", (req, res) => {
      const turma = new TurmasModel(...Object.values(req.body));
      const response = DatabaseTurmasMetodos.atualizaTurmaPorId(req.params.id,turma);
      res.status(201).json(response);
      // } else {
      res.status(400).json({ Erro: "Erro" });
    });

    app.delete("/turmas/:id", async (req, res) => {
      try {
        const turma = await DatabaseTurmasMetodos.deletaTurmaPorId(
          req.params.id
        );
        res.status(200).json(turma);
      } catch (error) {
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default Turmas;
