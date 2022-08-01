import ValidacoesService from "../services/ValidacoesServices.js";

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("5511988888888")).toBe(true)
})

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("+55 (11) 98888-8888")).toBe(true)
})

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("9999-9999")).toBe(true)
})

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("21 98888-8888")).toBe(true)
})

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("5511988888888")).toBe(true)
})

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("8888888")).toBe(false)
})

test("valida se o telefone esta no padrão: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888",()=>{
    expect(ValidacoesService.validaTelefone("0511088888888")).toBe(false)
})





