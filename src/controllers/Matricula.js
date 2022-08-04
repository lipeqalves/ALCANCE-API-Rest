import MatriculaModel from "../models/MatriculaModel.js"
import DatabeseMatriculaMetodos from "../DAO/DatabaseMatriculaMetodos.js"
import ValidacoesMatricula from "../services/ValidacoesMatricula.js"

class Matricula {
    static rotas(app) {
        app.get("/matriculas", async (req, res) => {
            try {
                const response = await DatabeseMatriculaMetodos.listarMatriculas()
                res.status(200).json(response)
            } catch (e) {
                res.status(400).json({ error: true, msg: e.message })
            }
        })

        app.get("/matriculas/:id", async (req, res) => {
            try {
                const matricula = await DatabeseMatriculaMetodos.listarMatriculaPorId(req.params.id)
                if (!matricula) {
                    throw new Error(`Matricula com Id ${req.params.id} não encontrada`);
                }
                res.status(200).json(matricula)
            } catch (e) {
                res.status(400).json({ error: true, msg: e.message })
            }
        })

        app.post("/matriculas", async (req, res) => {
            try {
                const validaMatricula = ValidacoesMatricula.validaMatricula(...Object.values(req.body))
                if (validaMatricula) {
                    const matricula = new MatriculaModel(...Object.values(req.body))
                    const response = await DatabeseMatriculaMetodos.adicionaMatriculas(matricula)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incorreta, revise o corpo da mesma");
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.put("/matriculas/:id", async (req, res) => {
            const validaMatricula = ValidacoesMatricula.validaMatricula(...Object.values(req.body))
            try {
                const matricula = await DatabeseMatriculaMetodos.listarMatriculaPorId(...Object.values(req.params.id))
                if (!matricula) {
                    throw new Error(`Matricula com Id ${req.params.id} não existe`)
                } else if (validaMatricula) {
                    const matricula = new MatriculaModel(...Object.values(req.body))
                    const response = await DatabeseMatriculaMetodos.atualizaMatricula(req.params.id, matricula)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição inválida, revise o corpo da mesma");
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.delete("/matriculas/:id", async (req, res) => {
            try {
                const matricula = await DatabeseMatriculaMetodos.listarMatriculaPorId(req.params.id);
                if (!matricula) {
                    throw new Error(`Matricula com Id ${req.params.id} não encontrada`);
                }
                const response = await DatabeseMatriculaMetodos.excluirMatricula(req.params.id)
                res.status(201).json(response)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })
    }
}

export default Matricula