import DAO from "./DAO.js"

class DatabaseEmpresaMetodos extends DAO {
    static async createTableEmpresa() {
        const query = `CREATE TABLE IF NOT EXISTS empresa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            empresa VARCHAR,
            cnpj  VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )`

        const response = await this.createTable(query);
        return response

    }

    static async listarEmpresa() {
        try {
            const query = `SELECT * FROM empresa`
            const response = await this.listarTodos(query);
            return response
        } catch (e) {
            console.log(e)
        }
    }

    static async listarEmpresaPorId(id) {
        const query = `SELECT * FROM empresa WHERE ID = ?`;
        const response = await this.listarPorId(id, query);
        return response;
    }

    static async adicionaEmpresa(empresa) {
        const query = `INSERT INTO empresa (empresa, cnpj, email, telefone) VALUES (?,?,?,?)`
        const response = await this.inserir(empresa, query)
        return response;
    }

    static async atualizaEmpresa(id, empresa) {
        const query = `UPDATE empresa SET empresa = ?, cnpj = ?, email = ?, telefone = ?  WHERE ID = ? `
        const response = await this.atualizaPorId(empresa, id, query)
        return response;
    }

    static async excluirEmpresa(id) {
        const query = `DELETE FROM empresa WHERE ID = ? `
        const response = await this.deletaPorId(query, id)
        return response;
    }

}

export default DatabaseEmpresaMetodos;