import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesAluno extends ValidacoesService {
    /**
     * Metodo valida idade ente 16 e 26 anos;
     * @param {number} idade 
     * @returns boolean
     */
    static validaIdade(n) {
        return !isNaN(parseFloat(n)) && n >= 16 && n <=26;
    }

  /**
   * Metodo valida todas as propriedades da entidade alunos;
   * @param {string} nome 
   * @param {string} email 
   * @param {string} telefone 
   * @param {number} idade 
   * @param {string} turma 
   * @param {string} curso 
   * @returns boolean
   */
    static validaAluno(nome, email, telefone, idade, turma, curso) {
        return this.validaNome(nome) &&
            this.validaEmail(email) &&
            this.validaTelefone(telefone) &&
            this.validaIdade(idade) &&
            this.validaClassificacao(turma) &&
            this.validaNome(curso)
    }
}

export default ValidacoesAluno;