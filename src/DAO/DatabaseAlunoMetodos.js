import DAO  from "./DAO.js";

class DatabaseAlunoMetodos extends DAO{

static async createTableAlunos(){
 

        const query = 
        
            `CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email  VARCHAR,
            telefone VARCHAR,
            turma VARCHAR,
            curso VARCHAR
    
        )`
    
        const response = await this.createTable(query);
        return response

}

static async listarAlunos(){
    try{
        const query = `SELECT * FROM alunos`
        const response =  await this.listarTodos(query);
        return response
    }catch(e){
        console.log(e) 
    }
} 

static async listarAlunosPorId(id){
    const query = `SELECT * FROM alunos WHERE ID = ?`;
    const response = await this.listarPorId(id, query);
    return response;
}

static async adicionaAluno(aluno){
    const query = `INSERT INTO alunos (nome, email, telefone, turma, curso) VALUES (?,?,?,?,?)`
    const response = await this.inserir(aluno, query)
    return response;
}
static async atualizaAluno(id, aluno){
    const query = `UPDATE alunos SET aluno WHERE ID = ? `   
    const response = await this.atualizaPorId(query, id, aluno)
    return response;
}

static async excluirAluno(id){
    const query = `DELETE FROM alunos WHERE ID = ? `   
    const response = await this.deletaPorId(query, id)
    return response;
}

}

export default DatabaseAlunoMetodos;