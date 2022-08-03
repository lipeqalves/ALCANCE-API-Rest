import ValidacoesTurmas from "./ValidacoesTurmas.js";

class ValidacoesMatricula extends ValidacoesTurmas {
    /**
     * Metodo verifica numeros e quantidade de caracteres igual a 6;
     * @param {string} num 
     * @returns boolean
     */
    static validaNumMatricula(n) {
        return !isNaN(parseFloat(n)) && n.length == 6 ;
    }

    /**
     * Metodo verifica dados da matricula do aluno
     * @param {string} aluno 
     * @param {string} data_inicio 
     * @param {string} numero_matricula 
     * @param {string} turma 
     * @param {string} curso 
     * @returns boolean
     */
    static validaMatricula(aluno, data_inicio, numero_matricula, turma, curso) {
        return this.validaNome(aluno) && this.validaData(data_inicio) && this.validaNumMatricula(numero_matricula) && this.validaClassificacao(turma) && this.validaNome(curso)
    }
}

export default ValidacoesMatricula;