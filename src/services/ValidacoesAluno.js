import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesAluno extends ValidacoesService {


  /**
   * Metodo valida todas as propriedades da entidade alunos;
   * @param {string} nome 
   * @param {string} email 
   * @param {string} telefone 
   *
   * @returns boolean
   */
    static validaAluno(nome, email, telefone) {
        return this.validaNome(nome) &&
            this.validaEmail(email) &&
            this.validaTelefone(telefone) 
    }
}

export default ValidacoesAluno;