import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const alunos = [
    {
        nome: "Filipe",
        email: "aluno@test.br",
        telefone: "8199999999",
        idade:18,
        turma: "01",
        curso: "Informática Avançada"
    },
    {
        nome: "Juliana",
        email: "aluno@test.br",
        telefone: "8199999999",
        idade:18,
        turma: "01",
        curso: "Programação Neurolinguistica"
    },
    {
        nome: "Roberta",
        email: "aluno@test.br",
        telefone: "8199999999",
        idade:18,
        turma: "01",
        curso: "Programação Neurolinguistica"
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




