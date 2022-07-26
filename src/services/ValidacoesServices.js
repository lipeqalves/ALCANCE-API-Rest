class ValidacoesServices{
    static validaNome(nome){
        return nome == /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    } 
    // static validaEmail(email){
    //     return email == /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    // }
    // static validaTelefone(telefone){
    //     return telefone == /^\([1-9]{2}\) 9[7-9]{1}[0-9]{3}\-[0-9]{4}$/
    // }
    static ehValido(nome){
        return this.validaNome(nome)
    }
}


export default ValidacoesServices