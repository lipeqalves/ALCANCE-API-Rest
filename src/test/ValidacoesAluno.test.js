import ValidacoesService from "../services/ValidacoesServices.js";


test("valida se o nome e sobrenome é maior que 3",()=>{
    expect(ValidacoesService.validaNome("Filipe")).toBe(true)
})

test("verifica se o nome digitado é um numero",()=>{
    expect(ValidacoesService.validaNome("123")).toBe(false)
})

test("valida se o nome é maior ou igua a 3",()=>{
    expect(ValidacoesService.validaNome(1)).toBe(false)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaEmail("filipe@teste.com")).toBe(true)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaEmail("filipe.com")).toBe(false)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaEmail("filipe@com")).toBe(false)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaTelefone("5511988888888")).toBe(true)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaTelefone("5511988888")).toBe(false)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaTelefone("988888")).toBe(false)
})




