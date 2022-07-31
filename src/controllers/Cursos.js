import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"
import CursosModel from "../models/CursosModel.js"
import ValidacoesCursos from "../services/ValidacoesCursos.js"

class Cursos {
    static rotas(app) {
        app.get("/cursos", async (req, res) => {
            const response = await DatabaseCursosMetodos.listarCursos()
            res.status(200).json(response)
        })

        app.get("/cursos/:id", async (req, res) => {
            try {
                const cursos = await DatabaseCursosMetodos.listarCursosPorId(req.params.id)
                if (!cursos) {
                    throw new Error("Curso não encontrado com esse Id")
                }
                res.status(200).json(response)
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

        app.put("/cursos/:id", (req, res) => {
            const validaCursos = ValidacoesCursos.validaCurso(...Object.values(req.body))

            if (validaCursos) {
                const cursos = new CursosModel(...Object.values(req.body))
                const response = DatabaseCursosMetodos.atualizaCursoPorId(req.params.id, cursos)
                res.status(201).json(response)
            } else {
                res.status(400).json()
            }
        })

        app.delete("/cursos/:id", async (req, res) => {
            const cursos = await DatabaseCursosMetodos.deletaCursoPorId(req.params.id)
            try {
                if (!cursos) {
                    throw new Error("Curso não encontrado")
                }
                res.status(200).json(cursos)
            } catch (error) {
                res.status(404).json({ Error: error.message })
            }

        })
    }
}

export default Cursos