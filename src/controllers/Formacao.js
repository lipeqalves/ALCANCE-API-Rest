import FormacaoModel from "../models/FormacaoModel.js"
import DatabaseFormacao from "../DAO/DatabaseFormacaoMetodos.js"

class Formacao {
    static rotas(app) {
        app.get("/formacao", async (req, res) => {
         res.send('rota funcionando')
        })

        app.get("/formacao/:id", async (req, res) => {
    
        })

        app.post("/formacao", async (req, res) => {

        })

        app.put("/formacao/:id", (req, res) => {
    
        })

        app.delete("/formacao/:id", async (req, res) => {
        })
    }
}

export default Formacao