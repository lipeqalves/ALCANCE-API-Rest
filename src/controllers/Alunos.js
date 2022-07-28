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

        app.post("/alunos",async (req, res) =>{
            
            // const ehValido = ValidacoesServices.ehValido(...Object.values(req.body))
            
            // if(!ehValido){
                
                const aluno = new AlunoModel(...Object.values(req.body))
                const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
                res.status(201).json(response)

            // }else{
            //  res.status(400).json({Erro:"Erro"})
            // }
        })
    //     app.put("/alunos/:id",(req, res) => {
    //         const aluno = new AlunoModel(...Object.values(req.body))
            
    //         res.status(201).json(DatabaseMetodos.atualizarPorId(...Object.values(req.params.id, aluno)))
    //     })
     }
}

export default Alunos