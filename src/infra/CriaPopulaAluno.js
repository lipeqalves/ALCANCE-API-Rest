import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const alunos = [
    {
        nome: "Filipe",
        email: "filipe@test.com.br",
        telefone: "8199999999",
        unidade: "Unidade Pernambuco",
        curso: "Introdução a Lógica de Programação",
        senha:"123456",
        cep: "53530490",
        endereco:"rua resilia, n 18, resilia ",
        cidade: "resiliente",
    },
    {
        nome: "Juliana",
        email: "juliana@test.com.br",
        telefone: "8199999999",
        unidade: "Unidade Santa Catarina",
        curso: "Inglês básico ao avançado",
        senha:"123456",
        cep: "53530490",
        endereco:"rua resilia, n 18, resilia ",
        cidade: "resiliente",
    },
    {
        nome: "Roberta",
        email: "roberta@test.com.br",
        telefone: "8199999999",
        unidade: "Unidade Rio de Janeiro",
        curso: "Excel básico ao avançado",
        senha:"123456" ,
        cep: "53530490",
        endereco:"rua resilia, n 18, resilia ",
        cidade: "resiliente",
    },
    {
        nome: "Carme",
        email: "aluno@test.br",
        telefone: "8199999999",
        unidade: "Unidade São Paulo",
        curso: "Introdução a Metodologia Àgil",
        senha:"123456" ,
        cep: "53530490",
        endereco:"rua resilia, n 18, resilia ",
        cidade: "resiliente",
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




