import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const aluno = {
    nome:"Aluno de Teste",
    email: "aluno@test.br" ,
    telefone: "8199999999",
    turma:"01",
    curso:"banco de dados"
}

try {
    const tabela = await DatabaseMetodos.createTableAluno()
    console.log(tabela)

    const criada = await DatabaseMetodos.inserirAluno(aluno)
    console.log(criada)

}catch (e){
    console.log(e)
}