import DatabaseTurmasMetodos from "../DAO/DatabaseTurmasMetodos.js";

const turmas = [{
  classificacao: "A",
  data_inicio: "10/02/2022",
  data_formatura: "10/11/2024",
  professor: "Paulo Souza",
  curso: "Informatica Basica"
}, {
  classificacao: "B",
  data_inicio: "10/03/2022",
  data_formatura: "10/12/2024",
  professor: "Sandra Castro",
  curso: "Informatica Intermediario"
}, {
  classificacao: "C",
  data_inicio: "10/04/2022",
  data_formatura: "10/01/2025",
  professor: "Monica Santoro",
  curso: "Informatica Avançado"
}]

try {
  const response = await DatabaseTurmasMetodos.createTableTurmas();
  console.log(`Tabela Turmas: ${response}`);

  turmas.forEach(async function (turma) {
    const resposta = await DatabaseTurmasMetodos.inserirTurmas(turma);
  });
  console.log('Turmas cadastradas com sucesso!')
} catch (e) {
  console.log("Erro:", e);
}
