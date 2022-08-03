import ValidacoesService from "./ValidacoesServices.js"

class ValidacoesEmpresa extends ValidacoesService {
    /**
     * Metodo valida: nome da empresa, cnpj, email e telefone da entidade empresa
     * @param {string} empresa 
     * @param {string} cnpj 
     * @param {string} email 
     * @param {string} telefone 
     * @returns boolean
     */
    static validaEmpresa(empresa, cnpj, email, telefone) {
        return this.validaNome(empresa) && this.validaCnpj(cnpj) && this.validaEmail(email) && this.validaTelefone(telefone)
    }
}

export default ValidacoesEmpresa;