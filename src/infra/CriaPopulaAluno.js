import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";
import DAO from "../DAO/DAO.js";


const aluno = {
    nome:"Aluno de Teste",
    email: "aluno@test.br" ,
    telefone: "8199999999",
    turma:"01",
    curso:"banco de dados"
}

try {
    await DAO.ativaChavesEstrangeiras() 
    
    const alunos = await DatabaseAlunoMetodos.createTableAlunos()
    console.log(alunos)

    const alunoZero = await DatabaseAlunoMetodos.adicionaAluno(aluno)
    console.log(alunoZero)

}catch (e){
    console.log(e.message)
}