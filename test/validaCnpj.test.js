import ValidacoesService from "../services/ValidacoesServices.js";

describe('Com argumentos validos', () => {
    test("valida se o cnpj esta no padrao: 11.222.333/4444-55", () => {
        expect(ValidacoesService.validaCnpj("11222333444455")).toBe(true)
    })

    test("valida se o cnpj esta no padrao: 11.222.333/4444-55", () => {
        expect(ValidacoesService.validaCnpj("11.222.333/4444-55")).toBe(true)
    })
})

describe('Com argumentos inválidos', () => {
    test("valida se o cnpj esta no padrao: 11.222.333/4444-55", () => {
        expect(ValidacoesService.validaCnpj("222.333/4444-55")).toBe(false)
    })

    test("valida se o cnpj esta no padrao: 11.222.333/4444-55", () => {
        expect(ValidacoesService.validaCnpj("")).toBe(false)
    })

    test("valida se o cnpj esta no padrao: 11.222.333/4444-55", () => {
        expect(ValidacoesService.validaCnpj(null)).toBe(false)
    })
})
