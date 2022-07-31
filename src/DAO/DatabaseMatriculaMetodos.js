import DAO from "./DAO.js";

class DatabaseMatriculaMetodos extends DAO {

    static async createTableMatricula() {


        const query =

            `CREATE TABLE IF NOT EXISTS matriculas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            aluno VARCHAR,
            data_inicio  VARCHAR,
            numero_matricula VARCHAR,
            turma VARCHAR,
            curso VARCHAR
        )`
        const response = await this.createTable(query);
        return response

    }

    static async listarMatriculas() {
        try {
            const query = `SELECT * FROM matriculas`
            const response = await this.listarTodos(query);
            return response
        } catch (e) {
            console.log(e)
        }
    }

    static async listarMatriculaPorId(id) {
        const query = `SELECT * FROM matriculas WHERE ID = ?`;
        const response = await this.listarPorId(id, query);
        return response;
    }

    static async adicionaMatriculas(matricula) {
        const query = `INSERT INTO matriculas (aluno, data_inicio, numero_matricula, turma, curso) VALUES (?,?,?,?,?)`
        const response = await this.inserir(matricula, query)
        return response;
    }

    static async atualizaMatricula(id, matricula) {
        const query = `UPDATE matriculas SET aluno = ?, data_inicio = ?, numero_matricula = ?, turma = ?, curso= ?  WHERE ID = ? `
        const response = await this.atualizaPorId(matricula, id, query)
        return response;
    }

    static async excluirMatricula(id) {
        const query = `DELETE FROM matriculas WHERE ID = ? `
        const response = await this.deletaPorId(query, id)
        return response;
    }
    

}

    export default DatabaseMatriculaMetodos;