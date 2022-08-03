import DAO from "./DAO.js";

class DatabaseProfessoresMetodos extends DAO {

  static async createTableProfessores() {

    const query = 
    
    `CREATE TABLE IS NOT EXISTS professores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            disciplina VARCHAR
        )`

    const response = await this.createTable(query);
    return response;
  }

  static async listarProfessores() {
    try {
      const query = `SELECT * FROM professores`;
      const response = await this.listarProfessores(query);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  static async listarProfessoresPorId(id){
    const query = `SELECT * FROM professores WHERE ID  = ?`;
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async adicionaProfessor(professores){
    const query = `INSERT INTO professores (nome, email, telefone, disciplinas) VALUES (?, ?, ?, ?)`
    const response = await this.inserir(professores, query)
    return response;
  }
}

export default DatabaseProfessoresMetodos;
