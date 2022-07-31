import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"
//import DAO from "../DAO/DAO.js";

const cursos = [{
    nome: "Informática Avançada",
    horas_duracao: "80"
}, {
    nome: "Gestão Financeira",
    horas_duracao: "20"
}, {
    nome: "Programação Neurolinguistica",
    horas_duracao: "10"
}]

try {
    //await DAO.ativaChavesEstrangeiras()
    const response = await DatabaseCursosMetodos.createTableCursos()
    console.log(`Tabela Cursos: ${response}`)

    cursos.forEach(async function (curso) {
        const resposta = await DatabaseCursosMetodos.inserirCursos(curso)
        console.log(resposta)
    })
} catch (e) {
    console.log("Erro:", e)
}