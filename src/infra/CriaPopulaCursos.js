import DatabaseCursosMetodos from "../DAO/DatabaseCursosMetodos.js"

const cursos = [ {
    nome: "Excel",
    image: 'https://api.iconify.design/ri/file-excel-2-line.svg',
    descricao: "Aprenda Excel de forma completa e aplique seus conhecimentos construindo uma ferramenta avançada"
},{
    nome: "Informática",
    image: 'https://api.iconify.design/heroicons-outline/desktop-computer.svg',
    descricao: "Aprenda a explorar os diversos recursos da tecnologia e mantenha-se atualizado com o dinâmico mundo da informática."
}, {
    nome: "Lógica de Programação",
    image: "https://api.iconify.design/fa-solid/laptop-code.svg",
    descricao: "Treine sua mente para programar algoritmos sem dificuldades através de desafios práticos"
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