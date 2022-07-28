import DatabaseMetodos from "../DAO/DatabaseAlunoMetodos.js";

const aluno = {
    id:1,
    nome:"Aluno de Teste",
    email: "aluno@test.br" ,
    telefone: "8199999999",
    turma:"01",
    curso:"banco de dados"
}

try {
    const tabela = await DatabaseMetodos.createTableluno()
    console.log(tabela)
    const criada = await DatabaseMetodos.inserirAluno(aluno)
    console.log(criada)
}catch (error){
    console.log(e)
}