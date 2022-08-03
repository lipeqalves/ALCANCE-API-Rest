import DAO from "./DAO.js";

class DatabaseProfessoresMetodos extends DAO {

  static async createTableProfessores() {

    const query = 
    
    `CREATE TABLE IF NOT EXISTS professores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            disciplinas VARCHAR
        )`

    const response = await this.createTable(query);
    return response;
  }

  static async adicionaProfessor(professor){
    const query = `INSERT INTO professores (nome, email, telefone, disciplinas) VALUES (?, ?, ?, ?)`
    const response = await this.inserir(professor, query)
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

  static async listarProfessoresPorId(id){
    const query = `SELECT * FROM professores WHERE ID  = ?`;
    const response = await this.listarPorId(id, query);
    return response;
  }

}

export default DatabaseProfessoresMetodos;
