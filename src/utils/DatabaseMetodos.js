import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    static listarBanco(){
        return Database;
    }
    static listarAlunos(){
        return Database.Alunos;
    } 
    static adicionaAluno(aluno){
        return Database.Alunos = [...Database.Alunos, aluno];
    }
}

export default DatabaseMetodos;