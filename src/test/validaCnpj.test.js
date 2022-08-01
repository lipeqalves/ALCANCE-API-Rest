import ValidacoesService from "../services/ValidacoesServices.js";

test("valida se o cnpj esta no padrao: 11.222.333/4444-55",()=>{
    expect(ValidacoesService.validaCnpj("11222333444455")).toBe(true)
})

test("valida se o cnpj esta no padrao: 11.222.333/4444-55",()=>{
    expect(ValidacoesService.validaCnpj("11.222.333/4444-55")).toBe(true)
})

test("valida se o cnpj esta no padrao: 11.222.333/4444-55",()=>{
    expect(ValidacoesService.validaCnpj("222.333/4444-55")).toBe(false)
})
