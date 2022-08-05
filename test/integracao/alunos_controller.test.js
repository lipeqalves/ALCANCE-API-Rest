import request from 'supertest';
import app from '../../app.js'
import DatabaseAlunoMetodos from "../../src/DAO/DatabaseAlunoMetodos.js";

async function criaAluno() {
    const aluno = await DatabaseAlunoMetodos.adicionaAluno({
        "nome": "Juliana",
        "email": "aluno@test.br",
        "telefone": "8199999999",
        "idade": 16,
        "turma": "B",
        "curso": "Informática Básica"
    })
    return aluno
}

describe("successo", function () {
    describe("GET /alunos", function () {
        test("lista alunos", async function () {
            await criaAluno()
            const response = await request(app)
                .get('/alunos')
                .set('Content-type', 'application/json')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)

            expect(response.body).toContainEqual(
                expect.objectContaining({
                    "curso": "Informática Básica",
                    "email": "aluno@test.br",
                    "idade": 16,
                    "nome": "Juliana",
                    "telefone": "8199999999",
                    "turma": "B"
                })
            )
        })
    })

    describe("GET /alunos/:id", function () {
        test("pega aluno por id", async function () {



            await criaAluno()

            const response = await request(app)
                .get('/alunos/1')
                .set('Content-type', 'application/json')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400)

            expect(response.body).toEqual(
                {
                    "id": 1,
                    "nome": expect.any(String),
                    "email": expect.any(String),
                    "telefone": expect.any(String),
                    "idade": expect.any(Number),
                    "turma": expect.any(String),
                    "curso": expect.any(String)
                }
            )
        })
    })

    describe("POST /alunos", function () {
        test("cria aluno", async function () {
            const response = await request(app)
                .post('/alunos')
                .set('Content-type', 'application/json')
                .set('Accept', 'application/json')
                .send({
                    nome: "Juliana",
                    email: "aluno@test.br",
                    telefone: "963314092",
                    idade: 18,
                    turma: "A",
                    curso: "programacao"
                })
                .expect('Content-Type', /json/)
                .expect(201)

            expect(response.body).toEqual({ error: false, message: 'Cadastrado com sucesso!' })
        })
    })

    describe("PUT /alunos/:id", function () {
        test("atualiza aluno por id", async function () {
            const response = await request(app)
                .put('/alunos/1')
                .set('Content-type', 'application/json')
                .set('Accept', 'application/json')
                .send({
                    nome: "Juliana",
                    email: "aluno@test.br",
                    telefone: "963314092",
                    idade: 18,
                    turma: "A",
                    curso: "programacao"
                })
                .expect('Content-Type', /json/)
                .expect(201)

            expect(response.body).toEqual({ error: false, message: `Registro com Id 1 atualizado com sucesso` })
        })
    })

    describe("DELETE /alunos/:id", function () {
        test("deleta aluno por id", async function () {
            aluno = await criaAluno()
            const response = await request(app)
                .delete('/alunos/' + aluno.id)
                .set('Content-type', 'application/json')
                .set('Accept', 'application/json')
                .send()
                .expect(204)

            expect(response.body).toEqual({ erro: false, message: `Registro com Id  deletado com sucesso` })
        })
    })
})

// describe("erro", function () {
//     describe("POST /alunos", function () {
//         test("cria aluno sem nome", async function () {
//             const response = await request(app)
//                 .post('/alunos')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     email: "aluno@test.br",
//                     telefone: "963314092",
//                     idade: 18,
//                     turma: "A",
//                     curso: "programacao"
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ Error: true, msg: "Revise sua requisição, nome do aluno undefined inválido" })
//         })

//         test("cria aluno sem email", async function () {
//             const response = await request(app)
//                 .post('/alunos')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     nome: "juliana",
//                     telefone: "963314092",
//                     idade: 18,
//                     turma: "A",
//                     curso: "programacao"
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ Error: true, msg: "Revise sua requisição, email do aluno undefined inválido" })
//         })

//         test("cria aluno sem telefone", async function () {
//             const response = await request(app)
//                 .post('/alunos')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     nome: "Juliana",
//                     email: "aluno@test.br",
//                     idade: 18,
//                     turma: "A",
//                     curso: "programacao"
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, telefone do aluno undefined inválido" })
//         })

//         test("cria aluno sem idade", async function () {
//             const response = await request(app)
//                 .post('/alunos')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     nome: "Juliana",
//                     email: "aluno@test.br",
//                     telefone: "963314092",
//                     turma: "A",
//                     curso: "programacao"
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, idade do aluno undefined inválida" })
//         })

//         test("cria aluno sem turma", async function () {
//             const response = await request(app)
//                 .post('/alunos')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     nome: "Juliana",
//                     email: "aluno@test.br",
//                     telefone: "963314092",
//                     idade: 18,
//                     curso: "programacao"
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, turma do aluno undefined inválida" })
//         })

//         test("cria aluno sem curso", async function () {
//             const response = await request(app)
//                 .post('/alunos')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     nome: "Juliana",
//                     email: "aluno@test.br",
//                     telefone: "963314092",
//                     idade: 18,
//                     turma: "A",
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, curso do aluno undefined inválido" })
//         })
//     })

//     // describe("PUT /alunos", function () {
//     //     test("atualiza aluno sem nome", async function () {
//     //         const response = await request(app)
//     //             .put('/alunos/1')
//     //             .set('Content-type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send({
//     //                 email: "aluno@test.br",
//     //                 telefone: "963314092",
//     //                 idade: 18,
//     //                 turma: "A",
//     //                 curso: "programacao"
//     //             })
//     //             .expect('Content-Type', /json/)
//     //             .expect(400)

//     //         expect(response.body).toEqual({ Error: true, msg: "Revise sua requisição, nome do aluno undefined inválido" })
//     //     })

//     //     test("atualiza aluno sem email", async function () {
//     //         const response = await request(app)
//     //             .put('/alunos/1')
//     //             .set('Content-type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send({
//     //                 nome: "juliana",
//     //                 telefone: "963314092",
//     //                 idade: 18,
//     //                 turma: "A",
//     //                 curso: "programacao"
//     //             })
//     //             .expect('Content-Type', /json/)
//     //             .expect(400)

//     //         expect(response.body).toEqual({ Error: true, msg: "Revise sua requisição, email do aluno undefined inválido" })
//     //     })

//     //     test("atualiza aluno sem telefone", async function () {
//     //         const response = await request(app)
//     //             .put('/alunos/1')
//     //             .set('Content-type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send({
//     //                 nome: "Juliana",
//     //                 email: "aluno@test.br",
//     //                 idade: 18,
//     //                 turma: "A",
//     //                 curso: "programacao"
//     //             })
//     //             .expect('Content-Type', /json/)
//     //             .expect(400)

//     //         expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, telefone do aluno undefined inválido" })
//     //     })

//     //     test("atualiza aluno sem idade", async function () {
//     //         const response = await request(app)
//     //             .put('/alunos/1')
//     //             .set('Content-type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send({
//     //                 nome: "Juliana",
//     //                 email: "aluno@test.br",
//     //                 telefone: "963314092",
//     //                 turma: "A",
//     //                 curso: "programacao"
//     //             })
//     //             .expect('Content-Type', /json/)
//     //             .expect(400)

//     //         expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, idade do aluno undefined inválida" })
//     //     })

//     //     test("atualiza aluno sem turma", async function () {
//     //         const response = await request(app)
//     //             .put('/alunos/1')
//     //             .set('Content-type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send({
//     //                 nome: "Juliana",
//     //                 email: "aluno@test.br",
//     //                 telefone: "963314092",
//     //                 idade: 20,
//     //                 curso: "programacao"
//     //             })
//     //             .expect('Content-Type', /json/)
//     //             .expect(400)

//     //         expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, turma do aluno undefined inválida" })
//     //     })

//     //     test("atualiza aluno sem curso", async function () {
//     //         const response = await request(app)
//     //             .put('/alunos/1')
//     //             .set('Content-type', 'application/json')
//     //             .set('Accept', 'application/json')
//     //             .send({
//     //                 nome: "Juliana",
//     //                 email: "aluno@test.br",
//     //                 telefone: "963314092",
//     //                 idade: 18,
//     //                 turma: "A",
//     //             })
//     //             .expect('Content-Type', /json/)
//     //             .expect(400)

//     //         expect(response.body).toEqual({ "Error": true, "msg": "Revise sua requisição, curso do aluno undefined inválido" })
//     //     })
//     // })

//     describe("DELETE /alunos", function () {
//         test("deleta aluno por id que não existe", async function () {
//             const response = await request(app)
//                 .delete('/alunos/0')
//                 .set('Content-type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .send({
//                     email: "aluno@test.br",
//                     telefone: "963314092",
//                     idade: 18,
//                     turma: "A",
//                     curso: "programacao"
//                 })
//                 .expect('Content-Type', /json/)
//                 .expect(400)

//             expect(response.body).toEqual({ Error: true, msg: "Aluno não encontrado com esse Id 0" })
//         })

//     })
// })