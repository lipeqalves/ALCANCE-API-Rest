import ValidacoesTurmas from "../services/ValidacoesTurmas.js";

test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto",()=>{
    expect(ValidacoesTurmas.validaClassificacao("A")).toBe(true)
})
test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto",()=>{
    expect(ValidacoesTurmas.validaClassificacao("a")).toBe(true)
})
test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto",()=>{
    expect(ValidacoesTurmas.validaClassificacao("AB")).toBe(false)
})
test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto",()=>{
    expect(ValidacoesTurmas.validaClassificacao("ab")).toBe(false)
})
test(" Metodo valida classificacao(identificacao da turma) da turma em 1 letra do alfabeto",()=>{
    expect(ValidacoesTurmas.validaClassificacao("")).toBe(false)
})