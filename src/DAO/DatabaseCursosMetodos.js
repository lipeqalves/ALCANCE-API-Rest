import DAO from "./DAO.js"

class DatabaseCursosMetodos extends DAO{
    static async createTableCursos(){
        const query = `CREATE TABLE IF NOT EXISTS cursos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            horas_duracao VARCHAR
        )`
    
        const response = await this.createTable(query);
        return response
    }
    
    static listarCursos(){
        const queryCursos = `SELECT * FROM cursos`;
        const response =  this.listarTodos(queryCursos);
        return response;
    } 
    
    static listarCursosPorId(id){
        const queryCursos = `SELECT * FROM cursos WHERE ID = ?`;
        const response =  this.listarPorId(id, queryCursos);
        return response;
    }
    
    static adicionaCurso(curso){
        const queryCurso = `INSERT INTO cursos (nome, horas_duracao) VALUES (?,?)`
        const response = this.inserir(curso, queryCurso)
        return response;
    }
    
}
    
export default DatabaseCursosMetodos;