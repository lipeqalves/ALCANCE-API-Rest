import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesFormacao extends ValidacoesService {

    /**
     * Metodo valida sigla do estado. Somente 2 caracteres;
     * @param {string} estado 
     * @returns boolean
     */
    static validaEstado(estado) {
        if(!estado){
            return false
        }
        const str = parseInt(estado);
        return estado.length == 2 && str != estado;
    }

    /**
     * Metodo valida entrada dos valores correspondentes em formacao
     * @param {string} aluno 
     * @param {string} instituicao 
     * @param {string} cnpj 
     * @param {string} telefone 
     * @param {string} email 
     * @param {string} cidade 
     * @param {string} estado 
     * @param {string} curso 
     * @returns boolean
     */
    static validaFormacao(aluno, instituicao, cnpj, telefone, email, cidade, estado, curso) {
        return this.validaNome(aluno) && this.validaNome(instituicao) && this.validaCnpj(cnpj) && this.validaTelefone(telefone) && this.validaEmail(email) && this.validaNome(cidade) && this.validaEstado(estado) && this.validaNome(curso);
    }
}

export default ValidacoesFormacao