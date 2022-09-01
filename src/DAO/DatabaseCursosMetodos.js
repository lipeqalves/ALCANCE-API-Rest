import DAO from "./DAO.js"

class DatabaseCursosMetodos extends DAO {
    static async createTableCursos() {
        const query = `CREATE TABLE IF NOT EXISTS cursos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            image VARCHAR,
            horas_duracao VARCHAR
        )`

        const response = await this.createTable(query);
        return response
    }

    static async inserirCursos(curso){
        const query = `INSERT INTO cursos (nome, image, horas_duracao) VALUES (?,?,?)`
        const response = await this.inserir(curso, query)
        return response
    }

    static async listarCursos() {
            const query = `SELECT * FROM cursos`;
            const response = await this.listarTodos(query);
            return response;
    }

    static async listarCursosPorId(id) {
        const query = `SELECT * FROM cursos WHERE ID = ?`;
        const response = await this.listarPorId(id, query);
        return response;
    }

    static async atualizaCursoPorId(id, cursos) {
        const query = `UPDATE cursos SET (nome, image, horas_duracao ) = (?, ?, ?) WHERE id = ?`
        const response = await this.atualizaPorId(cursos, id, query)
        return response;
    }

    static async deletaCursoPorId(id){
        const query = `DELETE FROM cursos WHERE id = ?`
        const response = await this.deletaPorId(query, id)
        return response
    }

}

export default DatabaseCursosMetodos;