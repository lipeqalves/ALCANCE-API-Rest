import AlunoModel from "../models/AlunoModel.js"
import ValidacoesServices from "../services/ValidacoesServices.js"

class Alunos {
    static rotas(app){
        app.get("/alunos", (req, res) =>{

            const aluno = new AlunoModel(10, "oi")
            res.status(200).json(aluno)
        })

        app.post("/alunos",(req, res) =>{
            
            const ehValido = ValidacoesServices.validaNome(req.body.nome)
            
            if(!ehValido){
                const aluno = new AlunoModel(10, "filipe")
                res.status(201).json(aluno)
            }else{
             res.status(400).send("Erro")
            }
        })
    }
}

export default Alunos