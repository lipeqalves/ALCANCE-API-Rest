import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"
import CursosModel from "../models/CursosModel.js"
import ValidacoesServices from "../services/ValidacoesServices.js"

class Cursos {
    static rotas(app) {
        app.get("/cursos", async (req, res) => {
            const response = await DatabaseCursosMetodos.listarCursos()
            res.status(200).json(response)
        })
    }
}

export default Cursos