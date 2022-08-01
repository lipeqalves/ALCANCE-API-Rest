import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesAluno extends ValidacoesService{

    static validaIdade(idade){
        return idade >=16 && idade <=26
    }

    static validaAluno(nome, email, telefone, idade){
        return this.validaNome(nome) &&
               this.validaEmail(email) &&
               this.validaTelefone(telefone) && 
               this.validaIdade(idade)
    }

}


export default ValidacoesAluno;