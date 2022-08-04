import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const alunos = [
    {
        nome: "Filipe",
        email: "aluno@test.br",
        telefone: "8199999999",
        idade: "20",
        turma: "A",
        curso: "Informática Avançada"
    },
    {
        nome: "Juliana",
        email: "aluno@test.br",
        telefone: "8199999999",
        idade: "16",
        turma: "B",
        curso: "Informática Básica"
    },
    {
        nome: "Roberta",
        email: "aluno@test.br",
        telefone: "8199999999",
        idade: "18",
        turma: "C",
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




