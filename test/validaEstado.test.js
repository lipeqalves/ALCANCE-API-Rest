import ValidacoesFormacao from "../src/services/ValidacoesFormacao.js";

describe('Com argumentos validos', () => {
    test("valida se estado esta em sigla e sem numero", () => {
        expect(ValidacoesFormacao.validaEstado("SC")).toBe(true)
    })
    test("valida se estado esta em sigla e sem numero", () => {
        expect(ValidacoesFormacao.validaEstado("sp")).toBe(true)
    })
})

describe('Com argumentos inválidos', () => {
    test("valida se estado esta em sigla e sem numero", () => {
        expect(ValidacoesFormacao.validaEstado("12")).toBe(false)
    })
    test("valida se estado esta em sigla e sem numero", () => {
        expect(ValidacoesFormacao.validaEstado("")).toBe(false)
    })
    test("valida se estado esta em sigla e sem numero", () => {
        expect(ValidacoesFormacao.validaEstado(null)).toBe(false)
    })
    test("valida se estado esta em sigla e sem numero", () => {
        expect(ValidacoesFormacao.validaEstado("santa catarina")).toBe(false)
    })
})