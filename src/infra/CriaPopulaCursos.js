import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"

const cursos = [{
    nome: "Inglês básico ao avançado",
    image: "https://inglesbasico.com.br/wp-content/uploads/2020/04/aprenda_ingles_online_ingles_basico.jpg",
    descricao: "O curso de Inglês básico ao avançado tem como objetivo"
}, {
    nome: "Excel básico ao avançado ",
    image: "https://realedados.com.br/wp-content/uploads/2020/02/excel.jpg",
    descricao: "O curso de Excel básico ao avançado tem como objetivo"
},{
    nome: "Informatica básica",
    image: "https://escolalbk.com.br/wp-content/uploads/2021/10/Informatica-Basica-1024x1024.jpg",
    descricao: "O curso de Informatica básica tem como objetivo"
}, {
    nome: "Introdução a Metodologia Àgil",
    image: "https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2015/07/scrum-palestra-banner-768x411.png",
    descricao: "O curso de Introdução a Metodologia Àgil tem como objetivo"
},{
    nome: "Introdução a Lógica de Programação",
    image: "https://www.brasilcode.com.br/wp-content/uploads/2020/09/Logica-de-programacao-1024x427.png",
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