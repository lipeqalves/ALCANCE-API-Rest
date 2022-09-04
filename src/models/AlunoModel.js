class AlunoModel {
  constructor(nome, email, telefone, unidade, curso, _senha) {
    (this.nome = nome),
      (this.email = email),
      (this.telefone = telefone),
      
      (this.unidade = unidade),
      (this.curso = curso),
      (this._senha = _senha);
  }
}

export default AlunoModel;
