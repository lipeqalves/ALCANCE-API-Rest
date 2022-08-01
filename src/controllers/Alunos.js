import AlunoModel from "../models/AlunoModel.js"
import ValidacoesAluno from "../services/ValidacoesAluno.js"
import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js"



DatabaseAlunoMetodos.createTableAlunos();
class Alunos {
    static rotas(app) {

        app.get("/alunos", async (req, res) => {
            try {
                const response = await DatabaseAlunoMetodos.listarAlunos()
                res.status(200).json(response)
            } catch (e) {
                res.status(400).json({ error: true, msg: e.message })
            }
        })

        app.get("/alunos/:id", async (req, res) => {
            try {
                const response = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id)
                res.status(200).json(response)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })
        app.get("/aluno/:email", async (req, res) => {
            try {

                const email = req.params.email
                const response = await DatabaseAlunoMetodos.listarAlunosPorEmail(email)
                res.status(200).json(response)

            } catch (error) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.post("/alunos", async (req, res) => {
            try {
                const isValid = ValidacoesAluno.validaAluno(...Object.values(req.body))
                if (isValid) {

                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
                    res.status(201).json(response)

                } else {

                    const isValidNome = ValidacoesAluno.validaNome(req.body.nome)
                    const isValidTelefone = ValidacoesAluno.validaTelefone(req.body.telefone)
                    const isValidEmail = ValidacoesAluno.validaEmail(req.body.email)
                    const isValidIdade = ValidacoesAluno.validaIdade(req.body.idade)

                    if (!isValidNome) {
                        res.status(400).json({ Error: true, msg: `O nome: ${req.body.nome}, é invalido` })
                    } else if (!isValidEmail) {
                        res.status(400).json({ Error: true, msg: `O Email: ${req.body.email}, é invalido` })
                    } else if (!isValidTelefone) {
                        res.status(400).json({ Error: true, msg: `O numero de telefone: ${req.body.telefone}, é invalido` })
                    }
                    else if (!isValidIdade) {
                        res.status(400).json({ Error:true, msg: `A Idade: ${req.body.idade}, é invalido` })
                    }
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.put("/alunos/:id", async (req, res) => {
            try {
                const isValid = ValidacoesAluno.validaAluno(...Object.values(req.body))
                if (isValid) {

                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.atualizaAluno(...Object.values(req.params.id), aluno)
                    res.status(201).json(response)
                } else {
                    const isValidNome = ValidacoesAluno.validaNome(req.body.nome)
                    const isValidTelefone = ValidacoesAluno.validaTelefone(req.body.telefone)
                    const isValidEmail = ValidacoesAluno.validaEmail(req.body.email)
                    const isValidIdade = ValidacoesAluno.validaIdade(req.body.idade)
                    if (!isValidNome) {
                        res.status(400).json({ Error: true, msg: `O nome: ${req.body.nome}, é invalido` })
                    } else if (!isValidEmail) {
                        res.status(400).json({ Error: true, msg: `O Email: ${req.body.email}, é invalido` })
                    } else if (!isValidTelefone) {
                        res.status(400).json({Error: true, msg: `O numero de telefone: ${req.body.telefone}, é invalido` })
                    } else if (!isValidIdade) {
                        res.status(400).json({ Error: true, msg: `A Idade: ${req.body.idade}, é invalido` })
                    }
                }
            } catch (error) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.delete("/alunos/:id", async (req, res) => {
            try {

                const response = await DatabaseAlunoMetodos.excluirAluno(...Object.values(req.params.id))
                res.status(201).json(response)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

    }
}

export default Alunos