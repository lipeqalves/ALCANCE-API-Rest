import DatabaseTurmasMetodos from "../DAO/DataBaseTurmasMetodos";
import DAO from "../DAO/DAO.js";

const turmas = [
  {
    classificacao: "A",
    data_inicio: "10/02/2022",
    data_formatura: "10/11/2024",
    professor: "Paulo Souza",
    curso: "Informatica Basica",
  },
  {
    classificacao: "B",
    data_inicio: "10/03/2022",
    data_formatura: "10/12/2024",
    professor: "Sandra Castro",
    curso: "Informatica Intermediario",
  },
  {
    classificacao: "C",
    data_inicio: "10/04/2022",
    data_formatura: "10/01/2025",
    professor: "Monica Santoro",
    curso: "Informatica Avançado",
  },
];

try {
  await DAO.ativaChavesEstrangeiras();
  const response = await DatabaseTurmasMetodos.createTableTurmas();
  console.log(`Tabela Turmas: ${response}`);

  cursos.forEach(async function (turma) {
    const resposta = await DatabaseTurmasMetodos.inserirTurmas(turma);
    console.log(resposta);
  });
} catch (e) {
  console.log("Erro:", e);
}
