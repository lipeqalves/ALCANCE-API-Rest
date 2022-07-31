import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesTurmas extends ValidacoesService {
  static validaClassificacao(classificacao) {
    const string = parseInt(classificacao);
    return classificacao.length == 1;
  }
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
      this.validaData(data_inicio) &&
      this.validaNome(professor) &&
      this.validaNome(curso)
    );
  }
}

export default ValidacoesTurmas;
