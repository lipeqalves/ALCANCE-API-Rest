import ValidacoesService from "../services/ValidacoesServices.js";

test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("11/12/2022")).toBe(true)
})

test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("11-12-2022")).toBe(true)
})

test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("11-12-22")).toBe(false)
})
test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("11-13-2022")).toBe(false)
})

test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("11-00-2022")).toBe(false)
})

test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("00-10-2022")).toBe(false)
})

test("Metodo usa esta regex que valida para DD/MM/AAAA ou DD-MM-AAAA",()=>{
    expect(ValidacoesService.validaData("32-10-2022")).toBe(false)
})
