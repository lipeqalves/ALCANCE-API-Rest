import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"

const cursos = [{
    nome: "Informática Avançada",
    image: "https://alonza.com.br/o-que-e-react-native/",
    horas_duracao: "80"
}, {
    nome: "Gestão Financeira",
    image: "https://pt.m.wikipedia.org/wiki/Ficheiro:React-icon.svg",
    horas_duracao: "20"
}, {
    nome: "Programação Neurolinguistica",
    image: "../assets/js-badge.svg",
    horas_duracao: "10"
}]

try {
    const response = await DatabaseCursosMetodos.createTableCursos()
    console.log(`Tabela Cursos: ${response}`)

    cursos.forEach(async function (curso) {
        const resposta = await DatabaseCursosMetodos.inserirCursos(curso)
    })
    console.log('Cursos cadastrados com sucesso!')
} catch (e) {
    console.log("Erro:", e)
}