import MatriculaModel from "../models/MatriculaModel.js"
import DatabeseMatriculaMetodos from "../DAO/DatabaseMatriculaMetodos.js"

class Matricula {
    static rotas(app) {
        app.get("/matriculas", async (req, res) => {
            const response = await DatabeseMatriculaMetodos.listarMatriculas()
            res.status(200).json(response)
        })

        app.get("/matriculas/:id", async (req, res) => {
            const response = await DatabeseMatriculaMetodos.listarMatriculaPorId(req.params.id)
            res.status(200).json(response)
        })

        app.post("/matriculas", async (req, res) => {
            // const isValid = ValidacoesServices.isValid(...Object.values(req.body))
            // if(isValid){

            const matricula = new MatriculaModel(...Object.values(req.body))
            const response = await DatabeseMatriculaMetodos.adicionaMatriculas(matricula)
            res.status(201).json(response)

            // }else{
            //  res.status(400).json({Erro:"Erro"})
            // }
        })
        app.put("/matriculas/:id", async (req, res) => {
            const matricula = new MatriculaModel(...Object.values(req.body))
            const response = await DatabeseMatriculaMetodos.atualizaMatricula(...Object.values(req.params.id), matricula)
            res.status(201).json(response)
        })

        app.delete("/matriculas/:id", async (req, res) => {
            const response = await DatabeseMatriculaMetodos.excluirMatricula(...Object.values(req.params.id))
            res.status(201).json(response)
        })

    }
}



export default Matricula