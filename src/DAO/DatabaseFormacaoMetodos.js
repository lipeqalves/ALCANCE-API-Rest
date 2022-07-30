import DAO from "./DAO.js"

class DatabaseFormacaoMetodos extends DAO {
    static async createTableFormacao() {
        const query = `CREATE TABLE IF NOT EXISTS formacao(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            aluno VARCHAR,
            instituicao VARCHAR,
            cnpj VARCHAR,
            telefone VARCHAR,
            email VARCHAR,
            cidade VARCHAR,
            estado VARCHAR,
            curso VARCHAR
        )`

        const response = await this.createTable(query);
        return response
    }

    static async inserirFormacao(formacao) {
        const query = `INSERT INTO formacao (aluno, instituicao, cnpj, telefone, email, cidade, estado, curso) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        const response = await this.inserir(formacao, query)
        return response
    }

    static async listarFormacao() {
        const query = `SELECT * FROM formacao`;
        const response = await this.listarTodos(query);
        return response;
    }

    static async listarFormacaoPorId(id) {
        const query = `SELECT * FROM formacao WHERE ID = ?`;
        const response = await this.listarPorId(id, query);
        return response;
    }

    static async atualizaFormacaoPorId(id, formacao) {
        const query = `UPDATE formacao SET (aluno, instituicao, cnpj, telefone, email, cidade, estado, curso) = (?, ?, ?, ?, ?, ?, ?, ?) WHERE id = ?`
        const response = await this.atualizaPorId(formacao, id, query)
        return response;
    }

    static async deletaFormacaoPorId(id) {
        const query = `DELETE FROM formacao WHERE id = ?`
        const response = await this.deletaPorId(query, id)
        return response
    }
}

export default DatabaseFormacaoMetodos;