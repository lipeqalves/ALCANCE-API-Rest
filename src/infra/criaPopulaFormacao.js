import DatabaseFormacaoMetodos from "../DAO/DatabaseFormacaoMetodos.js"

const formacoes = [{
    aluno: "Filipe",
    instituicao: "Conexão",
    cnpj: "12.652.984/0001-07",
    telefone: "9999-9999",
    email: "instituicao@conexao.com",
    cidade: "Recife",
    estado: "PE",
    curso: "Informática Básica"
}, {
    aluno: "Juliana",
    instituicao: "Geração Aprender",
    cnpj: "34.654.532/0001-08",
    telefone: "5511988888888",
    email: "instituicao@geracaoaprender.com",
    cidade: "Garopaba",
    estado: "SC",
    curso: "Programação Neurolinguistica"
}, {
    aluno: "Roberta",
    instituicao: "Focus",
    cnpj: "56.655.489/0001-09",
    telefone: "21 98888-8888",
    email: "instituicao@focus.com",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    curso: "Informática Avançada"
}]

try {
    const response = await DatabaseFormacaoMetodos.createTableFormacao()
    console.log(`Tabela Formacao: ${response}`)

    formacoes.forEach(async function (formacao) {
        const resposta = await DatabaseFormacaoMetodos.inserirFormacao(formacao)
    })
    console.log('Formacoes cadastradas com sucesso!')
} catch (e) {
    console.log("Error:", e)
}