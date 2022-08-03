import ValidacoesService from "../src/services/ValidacoesServices.js"

describe('Com argumentos validos', () => {
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao("A")).toBe(true)
    })
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao("a")).toBe(true)
    })
})

describe('Com argumentos inválidos', () => {
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao("AB")).toBe(false)
    })
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao("ab")).toBe(false)
    })
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao("")).toBe(false)
    })
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao(null)).toBe(false)
    })
    test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto", () => {
        expect(ValidacoesService.validaClassificacao("1")).toBe(false)
    })
})