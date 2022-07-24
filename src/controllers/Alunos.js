import AlunoModel from "../models/AlunoModel.js"

class Alunos {
    static rotas(app){
        app.get("/alunos", (rec, res) =>{
            const aluno = new AlunoModel(10)
            res.status(200).json(aluno)
        })
        app.get("/alunos/:id", (rec,res) => {
            res.status(200).send("lista alunos por id")
        })
    }
}

export default Alunos