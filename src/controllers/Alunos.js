import AlunoModel from "../models/AlunoModel.js"
import ValidacoesAluno from "../services/ValidacoesAluno.js"
import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js"



DatabaseAlunoMetodos.createTableAlunos();
class Alunos {
    static rotas(app) {
        app.get("/", async (req, res) => {
            try {
                res.status(200).json({msg: "Bem Vindo!!!!"})
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

        app.get("/alunos/id/:id", async (req, res) => {
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
                const response = await DatabaseAlunoMetodos.listarAlunosPorEmail(req.params.email)
                res.status(200).json(response)

            } catch (error) {
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
                    const validaTelefone = ValidacoesAluno.validaTelefone( req.body.telefone)
                    const validaIdade = ValidacoesAluno.validaIdade(req.body.idade)

                    if (!validaNome) {

                        throw new Error(`Aluno não encontrado com esse nome = ${req.body.nome}`)
                    } 
                    else if (!validaEmail) {

                        throw new Error(`Aluno não encontrado com esse email = ${req.body.email}`)

                    }else if (!validaTelefone) {

                        throw new Error(`Aluno não encontrado com esse telefone = ${ req.body.telefone}`)

                    }else if (!validaIdade) {

                        throw new Error(`Aluno não encontrado com esse idade = ${req.body.idade}`)
                    }
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })
        app.put("/alunos/:id", async (req, res) => {
            try {  
              const validaAluno = ValidacoesAluno.validaAluno(...Object.values(req.body))

                if (validaAluno) {

                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.atualizaAluno(...Object.values(req.params.id), aluno)
                    res.status(201).json(response)

                } else {

                    const validaNome = ValidacoesAluno.validaNome(req.body.nome)
                    const validaTelefone = ValidacoesAluno.validaTelefone(req.body.telefone)
                    const validaEmail = ValidacoesAluno.validaEmail( req.body.email)
                    const validaIdade = ValidacoesAluno.validaIdade(req.body.idade)

                    if (!validaNome) {

                        throw new Error(`Aluno não encontrado com esse nome = ${req.body.nome}`)
                    } 
                    else if (!validaEmail) {

                        throw new Error(`Aluno não encontrado com esse email = ${req.body.email}`)

                    }else if (!validaTelefone) {

                        throw new Error(`Aluno não encontrado com esse telefone = ${ req.body.telefone}`)

                    }else if (!validaIdade) {
                        
                        throw new Error(`Aluno não encontrado com esse idade = ${req.body.idade}`)
                    }
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

        app.delete("/alunos/:id", async (req, res) => {
            try {
                const aluno = await DatabaseAlunoMetodos.listarAlunosPorId(...Object.values(req.params.id))
                if(!aluno){
                    throw new Error(`Aluno não encontrado com esse Id = ${req.params.id}`)
                }
                const response = await DatabaseAlunoMetodos.excluirAluno(...Object.values(req.params.id))
                res.status(201).json(response)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })

    }
}

export default Alunos