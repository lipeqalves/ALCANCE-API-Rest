import Database from "../infra/Database.js";

class DAO{
    static ativaChavesEstrangeiras(){
        const query = 'PRAGMA foreign_keys = ON';

        Database.run(query, error => {
            if(error){
                console.log(error.mensage);
            } else {
                console.log("Chaves estrangeiras estão ativas");
            }
        });
    }
    static createTable(query){

        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso!")
                }
            })
        })
    }

    static listarTodos(query){
        return new Promise((resolve, reject)=> {
            Database.all(query, (e, resultado)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    // static listarPorId(id, query){
    //     return new Promise((resolve, reject)=> {
    //         Database.get(query, id, (e, resultado)=>{
    //             if(e){
    //                 reject(e)
    //             } else {
    //                 resolve(resultado)
    //             }
    //         })
    //     })
    // }

    static inserir(entidade, query){
        const body = Object.values(entidade)

        return new Promise((resolve, reject)=>{
            Database.run(query, [...body], (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Cadastrado com sucesso!"})
                }
            })
        })
    }
}

export default DAO