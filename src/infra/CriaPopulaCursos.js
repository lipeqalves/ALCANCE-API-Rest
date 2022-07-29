import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"
import DAO from "../DAO/DAO.js";

const cursos = {
    nome: "Informática Avançada",
    horas_duracao: "80"
}

try {
    await DAO.ativaChavesEstrangeiras()

    const curso = await DatabaseCursosMetodos.createTableCursos()
    console.log(curso)

    await DatabaseCursosMetodos.inserirCursos(cursos)

} catch (e) {
    console.log("Erro:", e)
}