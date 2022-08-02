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
                const aluno = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id);
                if(!aluno){
                    throw new Error(`Aluno não encontrado com esse Id = ${req.params.id}`)
                }
                res.status(200).json(aluno)
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
                const nome = req.body.nome;
                const tel = req.body.telefone
                const email = req.body.email
                const idade = req.body.idade

                const validaAluno = ValidacoesAluno.validaAluno(...Object.values(req.body))

                if (validaAluno) {

                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
                    res.status(201).json(response)

                } else {

                    const validaNome = ValidacoesAluno.validaNome(nome)
                    const validaTelefone = ValidacoesAluno.validaTelefone(tel)
                    const validaEmail = ValidacoesAluno.validaEmail(email)
                    const validaIdade = ValidacoesAluno.validaIdade(idade)

                    if (!validaNome) {
                        res.status(400).json({ Error: true, msg: `O nome: ${nome}, é invalido` })
                    } else if (!validaEmail) {
                        res.status(400).json({ Error: true, msg: `O Email: ${email}, é invalido` })
                    } else if (!validaTelefone) {
                        res.status(400).json({ Error: true, msg: `O numero de telefone: ${tel}, é invalido` })
                    }
                    else if (!validaIdade) {
                        res.status(400).json({ Error: true, msg: `A Idade: ${idade}, é invalido` })
                    }
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.put("/alunos/:id", async (req, res) => {
            try {  
                const id = req.params.id;
                const nome = req.body.nome;
                const tel = req.body.telefone
                const email = req.body.email
                const idade = req.body.idade

              const isValid = ValidacoesAluno.validaAluno(...Object.values(req.body))

                if (isValid) {
                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.atualizaAluno(...Object.values(id), aluno)
                    res.status(201).json(response)
                } else {
                    const validaNome = ValidacoesAluno.validaNome(nome)
                    const validaTelefone = ValidacoesAluno.validaTelefone(tel)
                    const validaEmail = ValidacoesAluno.validaEmail(email)
                    const validaIdade = ValidacoesAluno.validaIdade(idade)
                    if (!validaNome) {
                        res.status(400).json({ Error: true, msg: `O nome: ${nome}, é invalido` })
                    } else if (!validaTelefone) {
                        res.status(400).json({ Error: true, msg: `O Email: ${email}, é invalido` })
                    } else if (!validaEmail) {
                        res.status(400).json({ Error: true, msg: `O numero de telefone: ${tel}, é invalido` })
                    } else if (!validaIdade) {
                        res.status(400).json({ Error: true, msg: `A Idade: ${idade}, é invalido` })
                    }
                }
            } catch (error) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.delete("/alunos/:id", async (req, res) => {
            try {
                const id = req.params.id;

                const response = await DatabaseAlunoMetodos.excluirAluno(...Object.values(id))
                res.status(201).json(response)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

    }
}

export default Alunos