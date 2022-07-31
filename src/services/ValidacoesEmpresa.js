import ValidacoesService from "./ValidacoesServices.js"

class ValidacoesEmpresa extends ValidacoesService{

    static validaEmpresa(empresa,cnpj,email,telefone){
        return this.validaNome(nome) && this.validaCnpj(cnpj) && this.validaEmail(email) && this.validaTelefone(telefone)
    }
}