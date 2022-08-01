import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"

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
    const response = await DatabaseCursosMetodos.createTableCursos()
    console.log(`Tabela Cursos: ${response}`)

    cursos.forEach(async function (curso) {
        const resposta = await DatabaseCursosMetodos.inserirCursos(curso)
    })
    console.log('Cursos cadastrados com sucesso!')
} catch (e) {
    console.log("Erro:", e)
}