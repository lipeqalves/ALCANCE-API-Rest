import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"
import CursosModel from "../models/CursosModel.js"
import ValidacoesCursos from "../services/ValidacoesCursos.js"

class Cursos {
    static rotas(app) {
        app.get("/cursos", async (req, res) => {
            try {
                const response = await DatabaseCursosMetodos.listarCursos()
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.get("/cursos/:id", async (req, res) => {
            try {
                const curso = await DatabaseCursosMetodos.listarCursosPorId(req.params.id)
                if (!curso) {
                    throw new Error(`Curso não encontrado com esse Id ${req.params.id}`)
                }
                res.status(200).json(curso)
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.post("/cursos", async (req, res) => {
            const validaCursos = ValidacoesCursos.validaCurso(...Object.values(req.body))
            try {
                if (validaCursos) {
                    const curso = new CursosModel(...Object.values(req.body))
                    const response = await DatabaseCursosMetodos.inserirCursos(curso)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/cursos/:id", async (req, res) => {
            const validaCursos = ValidacoesCursos.validaCurso(...Object.values(req.body))
            try {
                const curso = await DatabaseCursosMetodos.listarCursosPorId(req.params.id)
                if (!curso) {
                    throw new Error(`Curso com Id ${req.params.id} não existe`)
                } else if (validaCursos) {
                    const cursos = new CursosModel(...Object.values(req.body))
                    const response = await DatabaseCursosMetodos.atualizaCursoPorId(req.params.id, cursos)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição inválida, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json({ Error: error.message })
            }
        })

        app.delete("/cursos/:id", async (req, res) => {
            try {
                const curso = await DatabaseCursosMetodos.listarCursosPorId(req.params.id)
                if (!curso) {
                    throw new Error(`Curso com Id ${req.params.id} não encontrado`)
                }
                const response = await DatabaseCursosMetodos.deletaCursoPorId(req.params.id)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json({ Error: error.message })
            }
        })
    }
}

export default Cursos