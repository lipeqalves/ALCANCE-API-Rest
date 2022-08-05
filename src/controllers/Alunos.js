import AlunoModel from "../models/AlunoModel.js"
import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js"
import ValidacoesAluno from "../services/ValidacoesAluno.js"

class Alunos {
    static rotas(app) {
        app.get("/", (req, res) => {
            try {
                res.status(200).json({ msg: "Bem Vindo!!!!" })
            } catch (e) {
                res.status(400).json({ error: true, msg: e.message })
            }
        })

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
                const aluno = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id);
                if (!aluno) {
                    throw new Error(`Aluno não encontrado com esse Id:${req.params.id}`)
                }
                res.status(200).json(aluno)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.post("/alunos", async (req, res) => {
            try {
                const validaAluno = ValidacoesAluno.validaAluno(...Object.values(req.body))
                if (validaAluno) {
                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
                    res.status(201).json(response)
                } else {
                    const validaNome = ValidacoesAluno.validaNome(req.body.nome)
                    const validaEmail = ValidacoesAluno.validaEmail(req.body.email)
                    const validaTelefone = ValidacoesAluno.validaTelefone(req.body.telefone)
                    const validaIdade = ValidacoesAluno.validaIdade(req.body.idade)
                    const validaTurma = ValidacoesAluno.validaClassificacao(req.body.turma)
                    const validaCurso = ValidacoesAluno.validaNome(req.body.curso)

                    if (!validaNome) {
                        throw new Error(`Revise sua requisição, nome do aluno ${req.body.nome} inválido`)
                    } else if (!validaEmail) {
                        throw new Error(`Revise sua requisição, email do aluno ${req.body.email} inválido`)
                    } else if (!validaTelefone) {
                        throw new Error(`Revise sua requisição, telefone do aluno ${req.body.telefone} inválido`)
                    } else if (!validaIdade) {
                        throw new Error(`Revise sua requisição, idade do aluno ${req.body.idade} inválida`)
                    } else if (!validaTurma) {
                        throw new Error(`Revise sua requisição, turma do aluno ${req.body.turma} inválida`)
                    } else if (!validaCurso) {
                        throw new Error(`Revise sua requisição, curso do aluno ${req.body.curso} inválido`)
                    }
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.put("/alunos/:id", async (req, res) => {
            try {
                const alunoId = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id);
                const validaNome = ValidacoesAluno.validaNome(req.body.nome)
                const validaTelefone = ValidacoesAluno.validaTelefone(req.body.telefone)
                const validaEmail = ValidacoesAluno.validaEmail(req.body.email)
                const validaIdade = ValidacoesAluno.validaIdade(req.body.idade)
                const validaTurma = ValidacoesAluno.validaClassificacao(req.body.turma)
                const validaCurso = ValidacoesAluno.validaNome(req.body.curso)
                if (!alunoId) {
                    throw new Error(`Aluno com Id ${req.params.id} não existe`)
                } else if (!validaNome) {
                    throw new Error(`Revise sua requisição, nome do aluno ${req.body.nome} inválido`)
                } else if (!validaEmail) {
                    throw new Error(`Revise sua requisição, email do aluno ${req.body.email} inválido`)
                } else if (!validaTelefone) {
                    throw new Error(`Revise sua requisição, telefone do aluno ${req.body.telefone} inválido`)
                } else if (!validaIdade) {
                    throw new Error(`Revise sua requisição, idade do aluno ${req.body.idade} inválida`)
                } else if (!validaTurma) {
                    throw new Error(`Revise sua requisição, turma do aluno ${req.body.turma} inválida`)
                } else if (!validaCurso) {
                    throw new Error(`Revise sua requisição, curso do aluno ${req.body.curso} inválido`)
                } else {
                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.atualizaAluno(req.params.id, aluno)
                    res.status(201).json(response)
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.delete("/alunos/:id", async (req, res) => {
            try {
                const aluno = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id)
                if (!aluno) {
                    throw new Error(`Aluno não encontrado com esse Id ${req.params.id}`)
                }
                const response = await DatabaseAlunoMetodos.excluirAluno(req.params.id)
                res.status(204).json(response)
            } catch (e) {
                console.log(e)
                res.status(400).json({ Error: true, msg: e.message })
            }
        })
    }
}

export default Alunos