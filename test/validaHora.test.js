import ValidacoesCursos from "../services/ValidacoesCursos.js";

describe('Com argumentos validos', () => {
    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("1")).toBe(true)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("10")).toBe(true)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("100")).toBe(true)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("1000")).toBe(true)
    })

})

describe('Com argumentos inválidos', () => {

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("0")).toBe(false)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("um")).toBe(false)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("")).toBe(false)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras("-100")).toBe(false)
    })

    test("Metodo valida horas_duracao da entidade cursos", () => {
        expect(ValidacoesCursos.validaHoras(null)).toBe(false)
    })

})
