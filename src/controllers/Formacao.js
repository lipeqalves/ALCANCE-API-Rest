import FormacaoModel from "../models/FormacaoModel.js"
import DatabaseFormacaoMetodos from "../DAO/DatabaseFormacaoMetodos.js"

class Formacao {
    static rotas(app) {
        app.get("/formacao", async (req, res) => {
            const response = await DatabaseFormacaoMetodos.listarFormacao();
            res.status(200).json(response);
        })

        app.get("/formacao/:id", async (req, res) => {
            const response = await DatabaseFormacaoMetodos.listarFormacaoPorId(
                req.params.id
            );
            res.status(200).json(response);

        })

        app.post("/formacao", async (req, res) => {
            try {
                const formacao = new FormacaoModel(...Object.values(req.body));
                const response = await DatabaseFormacaoMetodos.inserirFormacao(formacao);
                res.status(201).json(response);
            } catch (error) {
                res.status(400).json(error.message);
            }

        })

        app.put("/formacao/:id", (req, res) => {
            const formacao = new FormacaoModel(...Object.values(req.body));
            const response = DatabaseFormacaoMetodos.atualizaFormacaoPorId(req.params.id, formacao);
            res.status(201).json(response);
            res.status(400).json({ Erro: "Erro" });

        })

        app.delete("/formacao/:id", async (req, res) => {
            try {
                const formacao = await DatabaseFormacaoMetodos.deletaFormacaoPorId(
                    req.params.id
                );
                res.status(200).json(formacao);
            } catch (error) {
                res.status(404).json({ Error: error.message });
            }
        });
    }
}
export default Formacao