import ValidacoesServices from "../services/ValidacoesServices.js"

class Cursos{
    static rotas(app){
        app.get("/courses", (req, res) =>{
            res.send("check")
        })
    }
}

export default Cursos