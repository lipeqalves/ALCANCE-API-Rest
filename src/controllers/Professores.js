import ProfessoresModel from "../models/ProfessoresModel.js";
import ValidacoesService from "../services/ValidacoesServices.js";
import DatabaseProfessoresMetodos from "../DAO/DatabaseProfessoresMetodos.js";

//DatabaseProfessoresMetodos.createTable();

class Professores {

  static rotas(app) {

    app.get("/professores", async (req, res) => {
      const response = await DatabaseProfessoresMetodos.listarProfessores();
      res.status(200).json(response);
    });

    // app.post("/professores", async (req, res) => {
    //   try {
    //     const validaProfessores = new ProfessoresModel(
    //       ...Object.values(req.body)
    //     );
    //     const response = await DatabaseProfessoresMetodos.listarProfessores(
    //       validaProfessores
    //     );
    //     res.status(201).json(response);
    //   } catch (error) {
    //     res.status(400).json(error.message);
    //   }
    // });
  }
}

export default Professores;
