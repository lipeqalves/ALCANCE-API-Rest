import DatabaseMatriculaMetodos from "../DAO/DatabaseMatriculaMetodos.js";

const matriculas = [{
    aluno: "Filipe",
    inicio: "29/03/2022",
    numero_matricula: "123456",
    turma: "A",
    curso: "Informática Básica"
},
{
    aluno: "Juliana",
    inicio: "29/03/2022",
    numero_matricula: "654321",
    turma: "B",
    curso: "Informática Intermediária"
},
{
    aluno: "Roberta",
    inicio: "29/23/2022",
    numero_matricula: "564321",
    turma: "C",
    curso: "Informática Avançada"
}]

try {
    const response = await DatabaseMatriculaMetodos.createTableMatricula()
    console.log(`Tabela Matricula: ${response}`)

    matriculas.forEach(async matricula => {
        const response = await DatabaseMatriculaMetodos.adicionaMatriculas(matricula)
    })
    console.log('Matriculas cadastadras com sucesso!')
} catch (e) {
    console.log(e.message)
}