class AlunoModel {
  constructor(
    nome,
    email,
    telefone,
    unidade,
    curso,
    senha,
    cep,
    endereco,
    cidade
  ) {
    (this.nome = nome),
      (this.email = email),
      (this.telefone = telefone),
      (this.unidade = unidade),
      (this.curso = curso),
      (this.senha = senha),
      (this.cep = cep),
      (this.endereco = endereco),
      (this.cidade = cidade);
  }
}

export default AlunoModel;
