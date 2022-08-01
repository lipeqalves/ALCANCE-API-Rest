import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesTurmas extends ValidacoesService {
  /**
   * Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto
   * @param {string} classificacao 
   * @returns boolean
   */
  static validaClassificacao(classificacao) {
    const string = parseInt(classificacao);
    return classificacao.length == 1;
  }

  /**
   * Metodo valida classificacao, data de inicio da turma, data formatura, nome professor e nome curso da entidade Turma
   * @param {string} classificacao 
   * @param {string} data_inicio 
   * @param {string} data_formatura 
   * @param {string} professor 
   * @param {string} curso 
   * @returns 
   */
  static validaTurmas(
    classificacao,
    data_inicio,
    data_formatura,
    professor,
    curso
  ) {
    return (
      this.validaClassificacao(classificacao) &&
      this.validaData(data_inicio) &&
      this.validaData(data_formatura) &&
      this.validaNome(professor) &&
      this.validaNome(curso)
    );
  }
}

export default ValidacoesTurmas;