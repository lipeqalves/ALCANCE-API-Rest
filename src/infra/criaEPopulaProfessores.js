
import DatabaseProfessoresMetodos from "../DAO/DatabaseProfessoresMetodos.js";


const professores = [
    {
        nome: "Mario Marques",
        email: "marioM@gmail.com",
        telefone: "8938399283",
        disciplina: "Informática Avançada"
    },
    {
        nome: "Mario Marques",
        email: "marioM@gmail.com",
        telefone: "8938399283",
        disciplina: "Informática Avançada"
    }
];


try {
    const response = await DatabaseProfessoresMetodos.createTableProfessores()
    console.log(`Tabela professores: ${response}`)


    professores.forEach(async professor =>{
        const response = await DatabaseProfessoresMetodos.adicionaProfessor(professor)
        console.log(response)
    })
} catch (error) {
    console.log(error.message)
}