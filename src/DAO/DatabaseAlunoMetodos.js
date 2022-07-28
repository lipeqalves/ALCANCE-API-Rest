import DAO  from "./DAO.js";

class DatabaseAlunoMetodos extends DAO{

static async createTableAlunos(){
    const query = `CREATE TABLE IF NOT EXISTS alunos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR,
        email  VARCHAR,
        telefone VARCHAR,
        turma VARCHAR,
        curso VARCHAR,

    )`

    const response = await this.createTable(query);
    return response
}

static listarAlunos(){
    const query = `SELECT * FROM alunos`;
    const response =  this.listarTodos(query);
    return response;
} 

static listarAlunosPorId(id){
    const query = `SELECT * FROM alunos WHERE ID = ?`;
    const response =  this.listarPorId(id, query);
    return response;
}

static adicionaAluno(aluno){
    const query = `INSERT INTO alunos (nome, email, telefone, turma, curso) VALUES (?,?,?,?,?)`
    const response = this.inserir(aluno, query)
    return response;
}

}

export default DatabaseAlunoMetodos;