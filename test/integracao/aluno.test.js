import request from "supertest"
import app from "../../app.js"

describe("estatus OK", () =>{

    it("GET: /", async () =>{
        const res = await request(app)
        .get("/");

        expect(res.status).toBe(200)
    });

    it("GET: /alunos", async () =>{
        const res = await request(app)
        .get("/alunos");

        expect(res.status).toBe(200)
    });
    
    it("GET: /alunos/1", async () =>{
        const res = await request(app)
        .get("/alunos/1");
        expect(res.status).toBe(200)
    });

    it("POST: /alunos", async () =>{
        const res = await request(app)
        .post("/alunos")
        .send({	nome: "Juliana",
		        email: "aluno@test.br",
		        telefone: "8199999999",
		        idade: 18,
		        turma: "A",
		        curso: "Programação Neurolinguistica"
            });
        expect(res.status).toBe(201)
    });

    it("PUT: /alunos/id", async () =>{
        const res = await request(app)
        .put("/alunos/1")
        .send({ 
                nome: "Juliana",
		        email: "aluno@test.br",
		        telefone: "8199999999",
		        idade: 18,
		        turma: "A",
		        curso: "Programação Neurolinguistica"
            });
        expect(res.status).toBe(201)
    });

})

describe("GET status Erro", () =>{

    it("GET: /a", async () =>{
        const res = await request(app)
        .get("/a");

        expect(res.status).toBe(404)
    })
    it("GET: /alunos/10", async () =>{
        const res = await request(app)
        .get("/alunos/10");

        expect(res.status).toBe(400)
    })

    it("DELETE: /alunos/id", async () =>{
        const res = await request(app)
        .delete("/alunos/8")
        expect(res.status).toBe(400)
    });

})
