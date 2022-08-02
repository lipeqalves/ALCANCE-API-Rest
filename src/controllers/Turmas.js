import TurmasModel from "../models/TurmasModel.js";
import DatabaseTurmasMetodos from "../DAO/DatabaseTurmasMetodos.js";
import ValidacoesTurmas from "../services/ValidacoesTurmas.js";


class Turmas {
  static rotas(app) {
    app.get("/turmas", async (req, res) => {
      try {
        const response = await DatabaseTurmasMetodos.listarTurmas();
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    app.get("/turmas/:id", async (req, res) => {
      try {
        const turmas = await DatabaseTurmasMetodos.listarTurmasPorId(req.params.id);
        if (!turmas) {
          throw new Error(`Turma com Id ${req.params.id} não encontrada`);
        }
        res.status(200).json(turmas);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    app.post("/turmas", async (req, res) => {
      const validaTurma = ValidacoesTurmas.validaTurmas(...Object.values(req.body));
      try {
        if (validaTurma) {
          const turma = new TurmasModel(...Object.values(req.body));
          const response = await DatabaseTurmasMetodos.inserirTurmas(turma);
          res.status(201).json(response);
        } else {
          throw new Error("Requisição incorreta, revise o corpo da mesma");
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    app.put("/turmas/:id", async (req, res) => {
      const validaTurma = ValidacoesTurmas.validaTurmas(...Object.values(req.body));
      try {
        const turmas = await DatabaseTurmasMetodos.listarTurmasPorId(req.params.id);
        if (!turmas) {
          throw new Error(`Turma com Id ${req.params.id} não existe`)
        } else if (validaTurma) {
          const turma = new TurmasModel(...Object.values(req.body));
          const response = await DatabaseTurmasMetodos.atualizaTurmaPorId(req.params.id, turma);
          res.status(200).json(response);
        } else {
          throw new Error("Requisição inválida, revise o corpo da mesma");
        }
      } catch (error) {
        res.status(400).json({ Error: error.message });
      }
    });

    app.delete("/turmas/:id", async (req, res) => {
      try {
        const turma = await DatabaseTurmasMetodos.listarTurmasPorId(req.params.id);
        if (!turma) {
          throw new Error(`Turma com Id ${req.params.id} não existe`);
        }
        const response = await DatabaseTurmasMetodos.deletaTurmaPorId(req.params.id)
        res.status(200).json(response);
      } catch (error) {
        res.status(404).json({ Error: error.message });
      }
    });
  }
}

export default Turmas;
