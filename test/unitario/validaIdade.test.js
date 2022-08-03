import ValidacoesAluno from "../../src/services/ValidacoesAluno.js"

describe('Com argumentos validos', () => {
    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(16)).toBe(true)
    })
    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(26)).toBe(true)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade("17")).toBe(true)
    })
})

describe('Com argumentos invalidos', () => {
    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(null)).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade("")).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade("ABC")).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(true)).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(".")).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(12)).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(30)).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade(-15)).toBe(false)
    })

    test("valida se a idade está no intervalo", () => {
        expect(ValidacoesAluno.validaIdade()).toBe(false)
    })
})