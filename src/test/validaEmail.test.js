import ValidacoesAluno from "../services/ValidacoesAluno.js"

describe('Com argumentos validos', () => {
    test("valida se o e-mail está no padrão string@string.com", () => {
        expect(ValidacoesAluno.validaEmail("filipe@teste.com")).toBe(true)
    })

    test("valida se o e-mail está no padrão string@string.com", () => {
        expect(ValidacoesAluno.validaEmail("filipe@teste.com.br")).toBe(true)
    })

})

describe('Com argumentos inválidos', () => {

    test("valida se o e-mail está no padrão string@string.com", () => {
        expect(ValidacoesAluno.validaEmail("filipe.com")).toBe(false)
    })

    test("valida se o e-mail está no padrão string@string.com", () => {
        expect(ValidacoesAluno.validaEmail("filipe@com")).toBe(false)
    })

    test("valida se o e-mail está no padrão string@string.com", () => {
        expect(ValidacoesAluno.validaEmail(null)).toBe(false)
    })

    test("valida se o e-mail está no padrão string@string.com", () => {
        expect(ValidacoesAluno.validaEmail("")).toBe(false)
    })
})