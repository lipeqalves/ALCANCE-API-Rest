import DAO from "./DAO.js";

class DatabaseProfessoresMetodo extends DAO {
  static async createTableProfessores() {
    const query = `CREATE TABLE IS NOT EXISTS professores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            disciplina VARCHAR
        )`;
    const response = await this.createTable(query);
    return response;
  }
  static async listarProfessores() {
    try {
      const query = `SELECT * FROM professores`;
      const response = await this.listarTodos(query);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default DatabaseProfessoresMetodo;
