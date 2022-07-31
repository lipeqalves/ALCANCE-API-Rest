import ValidacoesService from "./ValidacoesServices.js";

class ValidacoesCursos extends ValidacoesService{
    /**
     * 
     * @param {string} horas_duracao 
     * @returns boolean 
     */
    static validaHoras(horas_duracao){
        const horas = parseInt(horas_duracao)
        return horas >= 1
    }
    /**
     * 
     * @param {string} nome 
     * @param {string} horas_duracao 
     * @returns boolean
     */
    static validaCurso(nome, horas_duracao){
        return this.validaNome(nome) && this.validaHoras(horas_duracao)
    }

}

export default ValidacoesCursos