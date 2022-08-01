import ValidacoesService from "../services/ValidacoesServices.js";

test("valida se o nome e sobrenome é maior que 4 e não é um numero",()=>{
    expect(ValidacoesService.validaNome("Filipe")).toBe(true)
})

test("valida se o nome e sobrenome é maior que 4 e não é um numero",()=>{
    expect(ValidacoesService.validaNome("123")).toBe(false)
})

test("valida se o nome e sobrenome é maior que 4 e não é um numero",()=>{
    expect(ValidacoesService.validaNome(1)).toBe(false)
})

test("valida se o nome e sobrenome é maior que 4 e não é um numero",()=>{
    expect(ValidacoesService.validaNome("fili")).toBe(true)
})

test("valida se o nome e sobrenome é maior que 4 e não é um numero",()=>{
    expect(ValidacoesService.validaNome("")).toBe(false)
})
