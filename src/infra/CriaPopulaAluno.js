import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const alunos = [
    {
        nome: "Filipe",
        email: "filipe@test.com.br",
        telefone: "8199999999",
        unidade: "Unidade Pernambuco",
        curso: "Introdução a Lógica de Programação",
        _senha:"123456"
    },
    {
        nome: "Juliana",
        email: "juliana@test.com.br",
        telefone: "8199999999",
        unidade: "Unidade Santa Catarina",
        curso: "Inglês básico ao avançado",
        _senha:"123456"
    },
    {
        nome: "Roberta",
        email: "roberta@test.com.br",
        telefone: "8199999999",
        unidade: "Unidade Rio de Janeiro",
        curso: "Excel básico ao avançado",
        _senha:"123456" 
    },
    {
        nome: "Carme",
        email: "aluno@test.br",
        telefone: "8199999999",
        
        unidade: "Unidade São Paulo",
        curso: "Introdução a Metodologia Àgil",
        _senha:"123456" 
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




