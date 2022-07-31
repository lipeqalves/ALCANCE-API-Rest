class ValidacoesService {
  /**
   *Metodo valida se string tem mais que 3 caracteres
   * @param {string} nome
   * @returns boolean
   */
  static validaNome(nome) {
    const str = parseInt(nome);
    return nome.length >= 4 && str != nome;
  }

  /**
   * Método que valida se o e-mail está no padrão "string@string.com"
   * @param {string} email 
   * @returns boolean
   */
  static validaEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    return regex.test(email)
  }

/**
 * Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA
 * @param {string} data 
 * @returns boolean
 */
  static validaData(data) {
    const regexData =
      /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
    return regexData.test(data);
  }

  /**
   * Método que valida se o e-mail está no padrão "string@string.com"
   * @param {string} email
   * @returns boolean
   */
  static validaEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
  }

  /**Método que valida se o telefone esta no padrão:
   * Exemplos válidos: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888
   * @param {string} telefone
   * @returns boolean
   */
  static validaTelefone(telefone) {
    const regex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
    return regex.test(telefone);
  }
  
/**
 * Metodo valida se o cnpj esta no padrao: 11.222.333/4444-55
 * @param {string} cnpj 
 * @returns boolean
 */
  static validaCnpj(cnpj){
    const regexCnpj = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/
    return regexCnpj.test(cnpj)
  }

  /**
   *
   * @param {string} nome
   * @param {string} email
   * @param {string} telefone
   * @returns boolean
   */
  static isValid(nome, email, telefone) {
    return (
      this.validaNome(nome) &&
      this.validaTelefone(telefone) &&
      this.validaEmail(email)
    );
  }
}

export default ValidacoesService;
