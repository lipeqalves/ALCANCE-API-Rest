import AlunoModel from "../models/AlunoModel.js"
import ValidacoesServices from "../services/ValidacoesServices.js"
import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js"
import Database from "../infra/Database.js";


DatabaseAlunoMetodos.createTableAlunos();
class Alunos {
    static rotas(app){

        app.get("/alunos", async(req, res) =>{
            const response = await DatabaseAlunoMetodos.listarAlunos()
            res.status(200).json(response)
        })

        app.get("/alunos/:id", async(req, res) =>{
            const response = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id)
            res.status(200).json(response)
        })

        app.post("/alunos",async (req, res) =>{
            
             const isValid = ValidacoesServices.isValid(...Object.values(req.body))
             if(isValid){
                
                const aluno = new AlunoModel(...Object.values(req.body))
                const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
                res.status(201).json(response)

             }else{
              res.status(400).json({Erro:"Erro"})
             }
        })

        app.put("/alunos/:id", async (req, res) => {
            const aluno = new AlunoModel(...Object.values(req.body))
            const response = await DatabaseAlunoMetodos.atualizaAluno(...Object.values(req.params.id), aluno)
            res.status(201).json(response)
        })

        app.delete("/alunos/:id", async (req, res) => {
            const response = await DatabaseAlunoMetodos.excluirAluno(...Object.values(req.params.id))
            res.status(201).json(response)
        })
        
     }
}

export default Alunos