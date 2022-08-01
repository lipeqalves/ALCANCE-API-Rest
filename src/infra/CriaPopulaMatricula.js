import DatabaseMatriculaMetodos from "../DAO/DatabaseMatriculaMetodos.js";
//import DAO from "../DAO/DAO.js";

const matriculas = [{
    aluno: "Filipe",
    inicio: "29/03/2022",
    numero_matricula: "8199999999",
    turma: "01",
    curso: "Informática Avançada"
},
{
    aluno: "Juliana",
    inicio: "29/03/2022",
    numero_matricula: "8199999999",
    turma: "01",
    curso: "Informática Avançada"
},
{
    aluno: "Roberta",
    inicio: "29/23/2022",
    numero_matricula: "8199999999",
    turma: "01",
    curso: "Informática Avançada"
}
]


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