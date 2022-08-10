import ProfessoresModel from "../models/ProfessoresModel.js";
import ValidacoesProfessores from "../services/ValidacoesProfessores.js";
import DatabaseProfessoresMetodos from "../DAO/DatabaseProfessoresMetodos.js";

class Professores {
  static rotas(app) {
    app.get("/professores", async (req, res) => {
      try {
        const response = await DatabaseProfessoresMetodos.listarProfessores();
        res.status(200).json(response);
      } catch (e) {
        res.status(400).json({ error: true, msg: e.message })
      }
    });
    app.get("/professores/:id", async (req, res) => {
      try {
        const professor = await DatabaseProfessoresMetodos.listarProfessoresPorId(req.params.id);
        if (!professor) {
          throw new Error(`Professor não encontrado com esse ID:${req.params.id}`)
        }
        res.status(200).json(professor);
      } catch (e) {
        res.status(400).json({ Error: true, msg: e.message })
      }
    });

    app.post("/professores", async (req, res) => {
      const validaProf = ValidacoesProfessores.validaProfessor(...Object.values(req.body))
      try {
        if (validaProf) {
          const prof = new ProfessoresModel(...Object.values(req.body))
          const response = await DatabaseProfessoresMetodos.adicionaProfessor(prof)
          res.status(201).json(response)
        } else {
          throw new Error('Requisição incompleta, revise o corpo da mesma')
        }
      } catch (error) {
        res.status(400).json(error.message)
      }
    });

    app.put("/professores/:id", async (req, res) => {
      const validaProf = ValidacoesProfessores.validaProfessor(...Object.values(req.body))
      try {
        const prof = await DatabaseProfessoresMetodos.listarProfessoresPorId(req.params.id)
        if (!prof) {
          throw new Error(`Professor com Id ${req.params.id} não existe`)
        } else if (validaProf) {
          const professores = new ProfessoresModel(...Object.values(req.body))
          const response = await DatabaseProfessoresMetodos.atualizaProfessoresPorId(req.params.id, professores)
          res.status(201).json(response)
        } else {
          throw new Error("Requisição inválida, revise o corpo da mesma")
        }
      } catch (error) {
        res.status(400).json({ Error: error.message })
      }
    })

    app.delete("/professores/:id", async (req, res) => {
      try {
        const professores = await DatabaseProfessoresMetodos.listarProfessoresPorId(req.params.id)
        if (!professores) {
          throw new Error(`Professor com Id ${req.params.id} não encontrado`)
        }
        const response = await DatabaseProfessoresMetodos.deletaProfessoresPorId(req.params.id)
        res.status(200).json(response)
      } catch (error) {
        res.status(404).json({ Error: error.message })
      }
    })
  }
}

export default Professores;
