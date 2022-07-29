import EmpresaModel from "../models/EmpresaModel.js"
import ValidacoesServices from "../services/ValidacoesServices.js"
import DatabaseAlunoMetodos from "../DAO/DatabaseEmpresaMetodos.js"
import Database from "../infra/Database.js";


DatabaseEmpresaMetodos.createTableEmpresa();
class Empresa {
    static rotas(app){
        app.get("/empresa", async(req, res) =>{
            
            const response = await DatabaseEmpresaMetodos.listarEmpresa()
            res.status(200).json(response)
        })

        app.post("/empresa",async (req, res) =>{

            const empresa = new EmpresaModel(...Object.values(req.body))
            const response = await DatabaseEmpresaMetodos.adicionaEmpresa(empresa)
            res.status(201).json(response)

        })

    }
}

export default Empresa