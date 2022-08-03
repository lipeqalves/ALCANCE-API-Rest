import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesTurmas extends ValidacoesService {
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