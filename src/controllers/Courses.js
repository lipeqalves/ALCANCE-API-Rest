import DatabaseMetodos from "../utils/DatabaseMetodos.js"
import ValidacoesServices from "../services/ValidacoesServices.js"

class Courses{
    static route(app){
        app.get("/courses", (req, res) =>{
            res.send("check")
        })
    }
}

export default Courses