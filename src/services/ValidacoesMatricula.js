import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesMatricula extends ValidacoesService{
    static validaMatricula(aluno, data_inicio){
        return this.validaNome(aluno) && this.validaData(data_inicio)
    }
}


export default ValidacoesMatricula;