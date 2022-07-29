import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";
import DAO from "../DAO/DAO.js";


    const aluno = {
        nome:"Aluno",
        email: "aluno@test.br" ,
        telefone: "8199999999",
        turma:"01",
        curso:"Informática Avançada"
    }

    try {
        await DAO.ativaChavesEstrangeiras() 
        
        await DatabaseAlunoMetodos.createTableAlunos()
        
        await DatabaseAlunoMetodos.adicionaAluno(aluno)
        
    }catch (e){
        console.log(e.message)
    }

        
        


