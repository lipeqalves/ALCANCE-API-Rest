import DatabaseMatriculaMetodos from "../DAO/DatabaseMatriculaMetodos.js";
import DAO from "../DAO/DAO.js";

const matricula = {
    aluno:"Filipe",
    inicio:"12/12/2012",
    numero_matricula: "8199999999",
    turma:"01",
    curso:"Informática Avançada"
}

try {
    await DAO.ativaChavesEstrangeiras() 
    
    await DatabaseMatriculaMetodos.createTableMatriculas()
    
    await DatabaseMatriculaMetodos.adicionaMatriculas(matricula)
    
}catch (e){
    console.log(e.message)
}