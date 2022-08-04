import ProfessoresModel from "../models/ProfessoresModel.js";
import ValidacoesService from "../services/ValidacoesServices.js";
import DatabaseProfessoresMetodos from "../DAO/DatabaseProfessoresMetodos.js";

class Professores {
  static rotas(app) {
    app.get("/professores", async (req, res) => {
      try {
        const response = await DatabaseProfessoresMetodos.listarProfessores();
        res.status(200).json(response);
      } catch (e) {
        res.status(400).json({error: true, msg: e.message})
      }
    });
    app.get("/professores/:id", async(req, res)=>{
      try {
        const professor = await DatabaseProfessoresMetodos.listarProfessoresPorId(req.params.id);
        if(!professor){
          throw new Error(`Professor não encontrado com esse ID:${req.params.id}. Tente novamente.`)
        }
        res.status(200).json(professor);
      } catch (e) {
        res.status(400).json({Error: true, msg: e.message})
      }
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
