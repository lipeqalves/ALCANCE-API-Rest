import DAO from "../DAO/DAO.js";
<<<<<<< HEAD

import "./CriaPopulaAluno.js";
import "./CriaPopulaCursos.js";
import "./CriaPopulaTurmas.js";
import "./CriaPopulaEmpresa.js";
import "./criaPopulaFormacao.js"
import "./CriaPopulaMatricula.js";
import "./criaEPopulaProfessores.js";


=======
>>>>>>> ebbf26b355e7e2d2ec1b42daf3bc648bd7438513
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