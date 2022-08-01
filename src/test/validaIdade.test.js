import ValidacoesAluno from "../services/ValidacoesAluno.js"

test("valida se a idade está no intervalo",()=>{
    expect(ValidacoesAluno.validaIdade(16)).toBe(true)
})
test("valida se a idade está no intervalo",()=>{
    expect(ValidacoesAluno.validaIdade(26)).toBe(true)
})
test("valida se a idade está no intervalo",()=>{
    expect(ValidacoesAluno.validaIdade(12)).toBe(false)
})
test("valida se a idade está no intervalo",()=>{
    expect(ValidacoesAluno.validaIdade(30)).toBe(false)
})