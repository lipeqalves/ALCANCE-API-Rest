import EmpresaModel from "../models/EmpresaModel.js"
import DatabaseEmpresaMetodos from "../DAO/DatabaseEmpresaMetodos.js"
import ValidacoesEmpresa from "../services/ValidacoesEmpresa.js"

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
                    throw new Error(`Empresa não encontrada com esse Id : ${req.params.id}`)
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
                    res.status(200).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/empresa/:id", async (req, res) => {
            const validaEmpresas = ValidacoesEmpresa.validaEmpresa(...Object.values(req.body))
            try {
                if (validaEmpresas) {
                    const empresa = new EmpresaModel(...Object.values(req.body))
                    const response = await DatabaseEmpresaMetodos.atualizaEmpresa(req.params.id, empresa)
                    res.status(200).json(response)
                } else {
                    throw new Error("Requisição inválida, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.delete("/empresa/:id", async (req, res) => {
            try {
                const empresa = await DatabaseEmpresaMetodos.listarEmpresaPorId(req.params.id)
                if (!empresa) {
                    throw new Error("Empresa não encontrada")
                }
                const response = await DatabaseEmpresaMetodos.excluirEmpresa(req.params.id)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json({ Error: error.message })
            }
        })
    }
}

export default Empresa