import DAO from "../DAO/DAO.js";
try{
    await DAO.ativaChavesEstrangeiras()
}catch(e){
    console.log(e.message)
}
import "./CriaPopulaAluno.js";
import "./CriaPopulaCursos.js";
import "./CriaPopulaEmpresa.js";
import "./criaPopulaFormacao.js"
import "./CriaPopulaMatricula.js";
import "./CriaPopulaTurmas.js";