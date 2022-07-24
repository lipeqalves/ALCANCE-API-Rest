import AlunoModel from "../models/AlunoModel.js"
import ValidacoesServices from "../services/ValidacoesServices.js"
import DatabaseMetodos from "../utils/DatabaseMetodos.js"


class Alunos {
    static rotas(app){
        app.get("/alunos", (req, res) =>{
            //const aluno = new AlunoModel(10, "oi")
            //const response = DatabaseMetodos.listarAlunos()
            res.status(200).json(DatabaseMetodos.listarAlunos())
        })

        app.post("/alunos",(req, res) =>{
            
            const ehValido = ValidacoesServices.validaNome(req.body.nome)
            
            if(!ehValido){
                //const aluno = new AlunoModel(10, "filipe")
                const aluno = new AlunoModel(...Object.values(req.body))
                res.status(201).json(DatabaseMetodos.adicionaAluno(aluno))
            }else{
             res.status(400).json({Erro:"Erro"})
            }
        })
    }
}

export default Alunos