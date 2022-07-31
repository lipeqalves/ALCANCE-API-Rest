import ValidacoesService from "./ValidacoesServices.js"

class ValidacoesEmpresa extends ValidacoesService{

    static validaEmpresa(empresa,cnpj,email,telefone){
        return this.validaNome(empresa) && this.validaCnpj(cnpj) && this.validaEmail(email) && this.validaTelefone(telefone)
    }
}

export default ValidacoesEmpresa;