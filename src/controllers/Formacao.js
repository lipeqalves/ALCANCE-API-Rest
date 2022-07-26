import FormacaoModel from "../models/FormacaoModel.js"
import DatabaseFormacaoMetodos from "../DAO/DatabaseFormacaoMetodos.js"
import ValidacoesFormacao from "../services/ValidacoesFormacao.js"

class Formacao {
    static rotas(app) {
        app.get("/formacao", async (req, res) => {
            try {
                const response = await DatabaseFormacaoMetodos.listarFormacao();
                res.status(200).json(response);
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.get("/formacao/:id", async (req, res) => {
            try {
                const formacao = await DatabaseFormacaoMetodos.listarFormacaoPorId(req.params.id);
                if (!formacao) {
                    throw new Error(`Formação com Id ${req.params.id} não existe`)
                }
                res.status(200).json(formacao);
            } catch (error) {
                res.status(400).json({ Error: error.message })
            }
        })

        app.post("/formacao", async (req, res) => {
            const validaFormacoes = ValidacoesFormacao.validaFormacao(...Object.values(req.body))
            try {
                if (validaFormacoes) {
                    const formacao = new FormacaoModel(...Object.values(req.body));
                    const response = await DatabaseFormacaoMetodos.inserirFormacao(formacao);
                    res.status(201).json(response);
                } else {
                    throw new Error("Requisição incorreta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message);
            }
        })

        app.put("/formacao/:id", async (req, res) => {
            const validaFormacoes = ValidacoesFormacao.validaFormacao(...Object.values(req.body))
            try {
                const formacoes = await DatabaseFormacaoMetodos.listarFormacaoPorId(req.params.id);
                if (!formacoes) {
                    throw new Error(`Formação com Id ${req.params.id} não existe`)
                } else if (validaFormacoes) {
                    const formacao = new FormacaoModel(...Object.values(req.body));
                    const response = await DatabaseFormacaoMetodos.atualizaFormacaoPorId(req.params.id, formacao);
                    res.status(201).json(response);
                } else {
                    throw new Error("Requisição inválida, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json({ Error: error.message });
            }
        })

        app.delete("/formacao/:id", async (req, res) => {
            try {
                const formacao = await DatabaseFormacaoMetodos.listarFormacaoPorId(req.params.id);
                if (!formacao) {
                    throw new Error(`Formação com Id ${req.params.id} não existe`);
                }
                const response = await DatabaseFormacaoMetodos.deletaFormacaoPorId(req.params.id)
                res.status(200).json(response);
            } catch (error) {
                res.status(404).json({ Error: error.message });
            }
        });
    }
}

export default Formacao