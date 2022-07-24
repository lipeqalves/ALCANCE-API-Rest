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
    static atualizarPorId(id, aluno){
        const usuarioAtualizado = Database.Alunos.map((user, index) => {
            if(index == id){
                return  aluno;
            }
            return user;
        }) 
        Database.Alunos = usuarioAtualizado
            return{sucess: "Aluno atualizado", id: id}
    }
}

export default DatabaseMetodos;