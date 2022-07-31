import DAO from "../DAO/DAO.js";

import "./CriaPopulaAluno.js";
import "./CriaPopulaCursos.js";
import "./CriaPopulaTurmas.js";
import "./CriaPopulaEmpresa.js";
import "./criaPopulaFormacao.js"
import "./CriaPopulaMatricula.js";


try{
    await DAO.ativaChavesEstrangeiras()
}catch(e){
    console.log(e.message)
}


