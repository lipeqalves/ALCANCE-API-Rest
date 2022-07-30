import ValidacoesService from "../services/ValidacoesServices.js";


test("valida se o nome é maior ou igua a 3",()=>{
    expect(ValidacoesService.validaNome("filipe")).toBe(true)
})

test("valida se o nome é maior ou igua a 3",()=>{
    expect(ValidacoesService.validaNome(1)).toBe(false)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesService.validaEmail("filipe@teste.com")).toBe(true)
})




