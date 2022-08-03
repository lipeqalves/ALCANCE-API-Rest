import ValidacoesService from "../src/services/ValidacoesServices.js"

describe('Com argumentos validos', () => {
    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome("Filipe")).toBe(true)
    })

    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome("fili")).toBe(true)
    })

})

describe('Com argumentos inválidos', () => {
    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome("123")).toBe(false)
    })

    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome("fil")).toBe(false)
    })

    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome(1)).toBe(false)
    })

    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome("")).toBe(false)
    })

    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome(null)).toBe(false)
    })

    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome(true)).toBe(false)
    })
    test("valida se o nome e sobrenome é maior que 4 e não é um numero", () => {
        expect(ValidacoesService.validaNome()).toBe(false)
    })

})