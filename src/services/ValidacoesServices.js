class ValidacoesService {
  /**
   *
   * @param {string} nome
   * @returns boolean
   */
  static validaNome(nome) {
    const str = parseInt(nome);
    return nome.length >= 3 && str != nome;
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
    const regex =
      /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
    return regex.test(telefone);
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
