import ValidacoesCursos from "../services/ValidacoesCursos.js";

test("Metodo valida horas_duracao da entidade cursos",()=>{
    expect(ValidacoesCursos.validaHoras("1")).toBe(true)
})
test("Metodo valida horas_duracao da entidade cursos",()=>{
    expect(ValidacoesCursos.validaHoras("0")).toBe(false)
})

test("Metodo valida horas_duracao da entidade cursos",()=>{
    expect(ValidacoesCursos.validaHoras("um")).toBe(false)
})

test("Metodo valida horas_duracao da entidade cursos",()=>{
    expect(ValidacoesCursos.validaHoras("")).toBe(false)
})