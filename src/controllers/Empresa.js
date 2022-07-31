import EmpresaModel from "../models/EmpresaModel.js"
import ValidacoesEmpresa from "../services/ValidacoesEmpresa.js"
import DatabaseEmpresaMetodos from "../DAO/DatabaseEmpresaMetodos.js"

DatabaseEmpresaMetodos.createTableEmpresa();
class Empresa {
    static rotas(app) {
        app.get("/empresa", async (req, res) => {

            const response = await DatabaseEmpresaMetodos.listarEmpresa()
            res.status(200).json(response)
        })

        app.get("/empresa/:id", async (req, res) => {
            try {
                const empresa = await DatabaseEmpresaMetodos.listarEmpresaPorId(req.params.id)
                if (!empresa) {
                    throw new Error("Empresa não encontrada com esse Id")
                }
                res.status(200).json(empresa)
            } catch (error) {
                res.status(400).json(error.message)
            }


        })

        app.post("/empresa", async (req, res) => {

            const ValidaEmpresa = ValidacoesEmpresa.validaEmpresa(...Object.values(req.body))
            try {
                if (ValidaEmpresa) {
                    const empresa = new EmpresaModel(...Object.values(req.body))
                    const response = await DatabaseEmpresaMetodos.adicionaEmpresa(empresa)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/empresa/:id", async (req, res) => {
            const validaEmpresa = ValidacoesEmpresa.validaEmpresa(...Object.values(req.body))

            if (validaEmpresa) {
                const empresa = new EmpresaModel(...Object.values(req.body))
                const response = await DatabaseEmpresaMetodos.atualizaEmpresa(...Object.values(req.params.id), empresa)
                res.status(201).json(response)
            } else {
                res.status(400).json()
            }

        })

        app.delete("/empresa/:id", async (req, res) => {
            const empresa = await DatabaseEmpresaMetodos.excluirEmpresa(...Object.values(req.params.id))
            try {
                if (!empresa) {
                    throw new Error("Empresa não encontrada")
                }
                res.status(201).json(empresa)
            } catch (error) {
                res.status(404).json({ Error: error.message })
            }

        })

    }
}

export default Empresa