import DatabaseFormacaoMetodos from "../DAO/DatabaseFormacaoMetodos.js"
//import DAO from "../DAO/DAO.js";

const formacoes = [{
    aluno: "Filipe",
    instituicao: "Conexão",
    cnpj: "12.652.984/0001-07",
    telefone: "4445567789",
    email: "instituicao@conexao.com",
    cidade: "Recife",
    estado: "PE",
    curso: "Informática Básica"
}, {
    aluno: "Juliana",
    instituicao: "Geração Aprender",
    cnpj: "34.654.532/0001-08",
    telefone: "3335567743",
    email: "instituicao@geracaoaprender.com",
    cidade: "Garopaba",
    estado: "SC",
    curso: "Programação Neurolinguistica"
}, {
    aluno: "Roberta",
    instituicao: "Focus",
    cnpj: "56.655.489/0001-09",
    telefone: "1115562245",
    email: "instituicao@focus.com",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    curso: "Informática Avançada"
}]

try {
    //await DAO.ativaChavesEstrangeiras()
    const response = await DatabaseFormacaoMetodos.createTableFormacao()
    console.log(`Tabela Formacao: ${response}`)

    formacoes.forEach(async function (formacao) {
        const resposta = await DatabaseFormacaoMetodos.inserirFormacao(formacao)
        console.log(resposta)
    })
} catch (e) {
    console.log("Error:", e)
}