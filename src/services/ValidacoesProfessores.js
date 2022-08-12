import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesProfessores extends ValidacoesService {
    /**
     * 
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @param {string} disciplinas 
     * @returns boolean
     */
    static validaProfessor(nome, email, telefone, disciplinas){
        return this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone) && this.validaNome(disciplinas)
    }
}

export default ValidacoesProfessores