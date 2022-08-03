import ProfessoresModel from "../models/ProfessoresModel.js";
import ValidacoesService from "../services/ValidacoesServices.js";
import DatabaseProfessoresMetodos from "../DAO/DatabaseProfessoresMetodos.js";

class Professores {
  static rotas(app) {
    app.get("/professores", async (req, res) => {
      const response = await DatabaseProfessoresMetodos.listarProfessores();
      res.status(200).json(response);
    });

    app.post("/professores", async (req, res) => {
      const profModel = new ProfessoresModel(...Object.values(req.body));
      const response = await DatabaseProfessoresMetodos.adicionaProfessor(
        profModel
      );
      res.status(201).json(response);
    });
  }
}

export default Professores;
