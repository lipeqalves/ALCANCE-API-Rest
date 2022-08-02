import DAO from "./DAO.js";

class DatabaseTurmasMetodos extends DAO {
  static async createTableTurmas() {
    const query = 
            `CREATE TABLE IF NOT EXISTS turmas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            classificacao VARCHAR,
            data_inicio VARCHAR,
            data_formatura VARCHAR,
            professor VARCHAR,
            curso VARCHAR
        )`

    const response = await this.createTable(query);
    return response;
  }

  static async inserirTurmas(turma) {
    const query = `INSERT INTO turmas (classificacao, data_inicio, data_formatura, professor, curso) VALUES (?,?,?,?,?)`;
    const response = await this.inserir(turma, query);
    return response;
  }

  static async listarTurmas() {
    const query = `SELECT * FROM turmas`;
    const response = await this.listarTodos(query);
    return response;
  }

  static async listarTurmasPorId(id) {
    const query = `SELECT * FROM turmas WHERE ID = ?`;
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async atualizaTurmaPorId(id, turmas) {
    const query = `UPDATE turmas SET (classificacao, data_inicio, data_formatura, professor, curso) = (?,?,?,?,?) WHERE id = ?`;
    const response = await this.atualizaPorId(turmas, id, query);
    return response;
  }

  static async deletaTurmaPorId(id) {
    const query = `DELETE FROM turmas WHERE id = ?`;
    const response = await this.deletaPorId(query, id);
    return response;
  }
}

export default DatabaseTurmasMetodos;
