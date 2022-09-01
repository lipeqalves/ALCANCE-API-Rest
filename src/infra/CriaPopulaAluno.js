import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const alunos = [
    {
        nome: "Filipe",
        email: "aluno@test.br",
        telefone: "8199999999",
        estada: "PE",
        unidade: "Recife",
        curso: "Informática Avançada"
    },
    {
        nome: "Juliana",
        email: "aluno@test.br",
        telefone: "8199999999",
        estada: "PE",
        unidade: "Recife",
        curso: "Informática Básica"
    },
    {
        nome: "Roberta",
        email: "aluno@test.br",
        telefone: "8199999999",
        estada: "PE",
        unidade: "Recife",
        curso: "Informática intermediária"
    },
    {
        nome: "Carme",
        email: "aluno@test.br",
        telefone: "8199999999",
        estada: "PE",
        unidade: "Recife",
        curso: "Informática intermediária"
    }
]

try {
    const response = await DatabaseAlunoMetodos.createTableAlunos()
    console.log(`Tabela Alunos: ${response}`)

    alunos.forEach(async aluno => {
        const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
    })
    console.log(`Alunos: cadastrados com sucesso!`)
} catch (e) {
    console.log(e.message)
}




