import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesCursos extends ValidacoesService{

    /**
     * Metodo valida nome e hora_duracao da entidade cursos
     * @param {string} nome 
     * @param {string} horas_duracao 
     * @returns boolean
     */
    static validaCurso(nome){
        return this.validaNome(nome)
    }

}

export default ValidacoesCursos