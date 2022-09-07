import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"

const cursos = [ {
    nome: "Excel básico ao avançado ",
    image: 'https://api.iconify.design/ri/file-excel-2-line.svg',
    descricao: "O curso de Excel básico ao avançado tem como objetivo"
},{
    nome: "Introdução Informatica básica",
    image: 'https://api.iconify.design/heroicons-outline/desktop-computer.svg',
    descricao: "O curso de Informatica básica tem como objetivo"
}, {
    nome: "Introdução a Lógica de Programação",
    image: "https://api.iconify.design/fa-solid/laptop-code.svg",
    descricao: "O curso de Introdução a Lógica de Programação tem como objetivo"
}]

try {
    const response = await DatabaseCursosMetodos.createTableCursos()
    console.log(`Tabela Cursos: ${response}`)

    cursos.forEach(async function (curso) {
        const resposta = await DatabaseCursosMetodos.inserirCursos(curso)
    })
    console.log('Cursos cadastrados com sucesso!')
} catch (e) {
    console.log("Erro:", e)
}