import ValidacoesAluno from "../services/ValidacoesAluno.js"

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesAluno.validaEmail("filipe@teste.com")).toBe(true)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesAluno.validaEmail("filipe.com")).toBe(false)
})

test("valida se o e-mail está no padrão string@string.com",()=>{
    expect(ValidacoesAluno.validaEmail("filipe@com")).toBe(false)
})