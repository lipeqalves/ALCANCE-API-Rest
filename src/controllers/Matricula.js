import MatriculaModel from "../models/MatriculaModel.js"
import DatabeseMatriculaMetodos from "../DAO/DatabeseMatriculaMetodos.js"

class Matricula {
    static rotas(app){
        app.get("/matriculas", async(req, res) => {
            const response = await DatabeseMatriculaMetodos.listarMatricula()
            res.status(200).json(response)
        })
    }
}



export default Matricula