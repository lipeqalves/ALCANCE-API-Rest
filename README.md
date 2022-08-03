<div align='center'>

# Projeto Final Módulo 4 - API REST

![Design sem nome](https://user-images.githubusercontent.com/65184920/182678908-a75bcd97-0905-4223-bb11-5db7e16f181e.png)

[Projeto](#-sobre-o-projeto) - [Instalação](#-instalação-da-aplicação) - [Executar Projeto](#-execução-do-projeto) - [Banco de Dados](#-informações-sobre-o-banco-de-dados) - [Testes](#-testes) - [Entidades](#entidades)

</div>

## 📕 Sobre o Projeto 

<p>A Startup Alcance é a proposta de um MVP que tem por objetivo oferecer cursos profissionalizantes para jovens de baixa renda dispostos a se qualificar para o mercado de trabalho. Para simular o gerenciamento dessa escola criamos uma aplicação no ambiente back-end utilizando Node.js com framework Express, banco de dados relacional SQLite, padrão do tipo REST, padrão MVC e o padrão DAO na construção do projeto.</p>

![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![image](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) ![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![image](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)


##  🔧 Instalação da Aplicação  
 
 - Abra o terminal em uma pasta de sua preferência e adicione os seguintes comandos:
 
```
git clone https://github.com/lipeqalves/projetoM4-API-Rest.git 
```

- Para entrar na pasta do projeto:

``` 
cd projetoM4-API-Rest
```

- Instale as dependências necessárias com o seguinte comando:

```
npm i
```

##  🎲 Execução do Projeto 

- Para inicialização do projeto utilize o comando:

```
npm start
```

## 🗄 Informações sobre o banco de dados:
<p> Foi desenvolvido uma tarefa para popular o banco de dados e auxiliar na validação. Utilize o seguinte comando para execução: </p>

```
npm run infra
```

##  📌 Testes
<p> Para a execução de testes já definidos na aplicação utilize o seguinte comando no terminal: </p>

```
npm test
```

<div align='center' >

# Entidades

[Alunos](#alunos) - [Cursos](#cursos) - [Empresas](#empresa) - [Formação](#formação) - [Matrículas](#matriculas) - [Turmas](#turmas)

</div>

- ## Alunos

### Request 

```GET / alunos ```

<p>Visualização de alunos no banco de dados: </p>

```
http://localhost:3000/alunos
```

### Response

```json
	{
		"id": 1,
		"nome": "Filipe",
		"email": "aluno@test.br",
		"telefone": "8199999999",
		"idade": "20",
		"turma": "A",
		"curso": "Informática Avançada"
	}
```

### Request

```GET / alunos/id```

<p>Visualização de aluno por Id no banco de dados: </p>

```
http://localhost:3000/alunos/2
```

### Response

```json
{
	"id": 2,
	"nome": "Juliana",
	"email": "aluno@test.br",
	"telefone": "8199999999",
	"idade": 16,
	"turma": "B",
	"curso": "Informática Básica"
}
```

### Request

```POST / alunos```

```
http://localhost:3000/alunos
```
<p>Modelo de requisição para inserir aluno no banco de dados:</p>

```json

	{
		"nome": "cecilia",
		"email": "aluno@test.br",
		"telefone": "12992033219",
		"idade": "17",
		"turma": "E",
		"curso": "Informática Avançada"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Cadastrado com sucesso!"
}
```

### Request

``` PUT / alunos/id ```

```
http://localhost:3000/alunos/3 
```

<p> Modelo de requisição para atualizar dados do aluno por Id:</p>

```json

	{
		"nome": "Cecilia",
		"email": "aluno@test.br",
		"telefone": "12992033219",
		"idade": "17",
		"turma": "E",
		"curso": "Informática Avançada"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Registro com Id 3 atualizado com sucesso"
}
```

### Request

```DELETE / alunos/id```

<p> Deletar aluno do banco de dados por Id:</p>

```
http://localhost:3000/alunos/3
```

### Response

```json
{
	"erro": false,
	"message": "Registro com Id 3 deletado com sucesso"
}
```

- ## Cursos

### Request 

```GET / cursos ```

<p>Visualização de cursos no banco de dados: </p>

```
http://localhost:3000/cursos
```

### Response

```json
	{
		"id": 1,
		"nome": "Informática Avançada",
		"horas_duracao": "80"
	}
```

### Request

```GET / cursos/id```

<p>Visualização de curso por Id no banco de dados: </p>

```
http://localhost:3000/cursos/2
```

### Response

```json
	{
		"id": 2,
		"nome": "Gestão Financeira",
		"horas_duracao": "20"
	}
```

### Request

```POST / cursos```

```
http://localhost:3000/cursos
```
<p>Modelo de requisição para inserir curso no banco de dados:</p>

```json
	{
		"nome": "Programação Neurolinguistica",
		"horas_duracao": "10"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Cadastrado com sucesso!"
}
```

### Request

``` PUT / cursos/id ```

```
http://localhost:3000/cursos/3 
```

<p> Modelo de requisição para atualizar dados do curso por Id:</p>

```json
	{
		"nome": "Programação Neurolinguistica",
		"horas_duracao": "10"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Registro com Id 3 atualizado com sucesso"
}
```

### Request

```DELETE / cursos/id```

<p> Deletar curso do banco de dados por Id:</p>

```
http://localhost:3000/cursos/3
```

### Response

```json
{
	"erro": false,
	"message": "Registro com Id 3 deletado com sucesso"
}
```

- ## Empresa

### Request 

```GET / empresa ```

<p>Visualização de empresas no banco de dados: </p>

```
http://localhost:3000/empresa
```

### Response

```json
	{
		"id": 1,
		"empresa": "Roberta soluções informática S.A",
		"cnpj": "12.652.984/0001-07",
		"email": "robertainfo@hotmail.com",
		"telefone": "5511988888888"
	}
```

### Request

```GET / empresa/id```

<p>Visualização de empresa por Id no banco de dados: </p>

```
http://localhost:3000/empresa/2
```

### Response

```json
	{
		"id": 2,
		"empresa": "Filipe LTDA",
		"cnpj": "34.654.532/0001-08",
		"email": "filipe10@hotmail.com",
		"telefone": "5511988888888"
	}
```

### Request

```POST / empresa```

```
http://localhost:3000/empresa
```
<p>Modelo de requisição para inserir empresa no banco de dados:</p>

```json
	{
		"empresa": "filipe LTDA",
		"cnpj": "34.654.532/0001-08",
		"email": "filipe10@hotmail.com",
		"telefone": "5511988888888"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Cadastrado com sucesso!"
}
```

### Request

``` PUT / empresa/id ```

```
http://localhost:3000/empresa/3 
```

<p> Modelo de requisição para atualizar dados da empresa por Id:</p>

```json
	{
		"empresa": "Filipe LTDA",
		"cnpj": "34.654.532/0001-08",
		"email": "filipe10@hotmail.com",
		"telefone": "5511988888888"
	}
```

### Response

```json
{
	"error": false,
	"message": "Registro com Id 3 atualizado com sucesso"
}
```

### Request

```DELETE / empresa/id```

<p> Deletar empresa do banco de dados por Id:</p>

```
http://localhost:3000/empresa/3
```

### Response

```json
{
	"erro": false,
	"message": "Registro com Id 3 deletado com sucesso"
}
```


- ## Formação

### Request 

```GET / formacao ```

<p>Visualização de formação no banco de dados: </p>

```
http://localhost:3000/formacao
```

### Response

```json
	{
		"id": 1,
		"aluno": "Filipe",
		"instituicao": "Conexão",
		"cnpj": "12.652.984/0001-07",
		"telefone": "9999-9999",
		"email": "instituicao@conexao.com",
		"cidade": "Recife",
		"estado": "PE",
		"curso": "Informática Básica"
	}
```

### Request

```GET / formacao/id```

<p>Visualização de formação por Id no banco de dados: </p>

```
http://localhost:3000/formacao/2
```

### Response

```json
	{
		"id": 2,
		"aluno": "Juliana",
		"instituicao": "Geração Aprender",
		"cnpj": "34.654.532/0001-08",
		"telefone": "5511988888888",
		"email": "instituicao@geracaoaprender.com",
		"cidade": "Garopaba",
		"estado": "SC",
		"curso": "Programação Neurolinguistica"
	}
```

### Request

```POST / formacao```

```
http://localhost:3000/formacao
```
<p>Modelo de requisição para inserir formacao no banco de dados:</p>

```json
	{
		"aluno": "roberta",
		"instituicao": "Focus",
		"cnpj": "56.655.489/0001-09",
		"telefone": "21 98888-8888",
		"email": "instituicao@focus.com",
		"cidade": "Rio de Janeiro",
		"estado": "RJ",
		"curso": "Informática Avançada"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Cadastrado com sucesso!"
}
```

### Request

``` PUT / formacao/id ```

```
http://localhost:3000/formacao/3 
```

<p> Modelo de requisição para atualizar dados da empresa por Id:</p>

```json
	{
		"aluno": "Roberta",
		"instituicao": "Focus",
		"cnpj": "56.655.489/0001-09",
		"telefone": "21 98888-8888",
		"email": "instituicao@focus.com",
		"cidade": "Rio de Janeiro",
		"estado": "RJ",
		"curso": "Informática Avançada"
	}
```

### Response

```json
{
	"error": false,
	"message": "Registro com Id 3 atualizado com sucesso"
}
```

### Request

```DELETE / formacao/id```

<p> Deletar formação do banco de dados por Id:</p>

```
http://localhost:3000/formacao/3
```

### Response

```json
{
	"erro": false,
	"message": "Registro com Id 3 deletado com sucesso"
}
```

- ## Matriculas

### Request 

```GET / matriculas ```

<p>Visualização de matriculas no banco de dados: </p>

```
http://localhost:3000/matriculas
```

### Response

```json
	{
		"id": 1,
		"aluno": "Roberta",
		"data_inicio": "29/23/2022",
		"numero_matricula": "564321",
		"turma": "C",
		"curso": "Informática Avançada"
	}
```

### Request

```GET / matriculas/id```

<p>Visualização de matricula por Id no banco de dados: </p>

```
http://localhost:3000/matricula/2
```

### Response

```json
	{
		"id": 2,
		"aluno": "Filipe",
		"data_inicio": "29/03/2022",
		"numero_matricula": "123456",
		"turma": "A",
		"curso": "Informática Básica"
	}
```

### Request

```POST / matriculas```

```
http://localhost:3000/matriculas
```
<p>Modelo de requisição para inserir matricula no banco de dados:</p>

```json
	{
		"aluno": "Juliana",
		"data_inicio": "29/03/2022",
		"numero_matricula": "654321",
		"turma": "B",
		"curso": "Informática Intermediária"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Cadastrado com sucesso!"
}
```

### Request

``` PUT / matriculas/id ```

```
http://localhost:3000/matriculas/3 
```

<p> Modelo de requisição para atualizar dados da matricula por Id:</p>

```json
	{
		"aluno": "Juliana",
		"data_inicio": "29/03/2022",
		"numero_matricula": "654321",
		"turma": "B",
		"curso": "Informática Intermediária"
	}
```

### Response

```json
{
	"error": false,
	"message": "Registro com Id 3 atualizado com sucesso"
}
```

### Request

```DELETE / matriculas/id```

<p> Deletar matricula do banco de dados por Id:</p>

```
http://localhost:3000/matricula/3
```

### Response

```json
{
	"erro": false,
	"message": "Registro com Id 3 deletado com sucesso"
}
```


- ## Turmas

### Request 

```GET / turmas ```

<p>Visualização de turmas no banco de dados: </p>

```
http://localhost:3000/turmas
```

### Response

```json
	{
		"id": 1,
		"classificacao": "A",
		"data_inicio": "10/02/2022",
		"data_formatura": "10/11/2024",
		"professor": "Paulo Souza",
		"curso": "Informatica Basica"
	}
```

### Request

```GET / turmas/id```

<p>Visualização de turmas por Id no banco de dados: </p>

```
http://localhost:3000/turmas/2
```

### Response

```json
	{
		"id": 2,
		"classificacao": "B",
		"data_inicio": "10/03/2022",
		"data_formatura": "10/12/2024",
		"professor": "Sandra Castro",
		"curso": "Informatica Intermediario"
	}
```

### Request

```POST / turmas```

```
http://localhost:3000/turmas
```
<p>Modelo de requisição para inserir turmas no banco de dados:</p>

```json
	{
		"classificacao": "C",
		"data_inicio": "10/04/2022",
		"data_formatura": "10/01/2025",
		"professor": "Monica Santoro",
		"curso": "Informatica Avançado"
	}	
```

### Response

```json
{
	"error": false,
	"message": "Cadastrado com sucesso!"
}
```

### Request

``` PUT / turmas/id ```

```
http://localhost:3000/turmas/3 
```

<p> Modelo de requisição para atualizar dados da turma por Id:</p>

```json
	{
		"classificacao": "C",
		"data_inicio": "10/04/2022",
		"data_formatura": "10/01/2025",
		"professor": "Monica Santoro Silva",
		"curso": "Informatica Avançado"
	}
```

### Response

```json
{
	"error": false,
	"message": "Registro com Id 3 atualizado com sucesso"
}
```

### Request

```DELETE / turmas/id```

<p> Deletar turmas do banco de dados por Id:</p>

```
http://localhost:3000/turmas/3
```

### Response

```json
{
	"erro": false,
	"message": "Registro com Id 3 deletado com sucesso"
}
```
<div align='center'>

## 💻  Desenvolvedores do Projeto
	
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/filipeqalves/">
        <img src="https://media-exp1.licdn.com/dms/image/D4D35AQGZkNLLwWnjSA/profile-framedphoto-shrink_800_800/0/1658175346093?e=1660168800&v=beta&t=m1mWI5S8tNb-t_5vsx02LW_Uc9WW2o-FAfvo8bjmi1w" width="100px;" alt="Foto de Filipe no GitHub"/><br>
        <sub>
          <b>Filipe Alves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/carme-fernandes/">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFjdIXAsmM5Tg/profile-displayphoto-shrink_400_400/0/1649007238786?e=1665014400&v=beta&t=_YSLT9iSKfVNbRotuB8fHJULvKA4nUckJwc6zYPvLgo" width="100px;" alt="Foto da Carme no GitHub"/><br>
        <sub>
          <b>Carme Fernandes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/roberta-oliveira07/">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGpvu2oA3myDA/profile-displayphoto-shrink_800_800/0/1657663692483?e=1665014400&v=beta&t=a2v2WGH2ZN53U64DpMW99UQLFr3n1jlxV9tv67uy-8A" width="100px;" alt="Foto de Roberta Oliveira no GitHub"/><br>
        <sub>
          <b>Roberta Oliveira</b>
        </sub>
      </a>
    </td>
       <td align="center">
      <a href="https://www.linkedin.com/in/julianaha/">
        <img src="https://avatars.githubusercontent.com/u/65184920?v=4" width="100px;" alt="Foto da Juliana no GitHub"/><br>
        <sub>
          <b>Juliana Souza</b>
        </sub>
      </a>
    </td>
    	<td align="center">
      <a href="https://www.linkedin.com/in/lucianopaiva/">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQESrOp06ojulw/profile-displayphoto-shrink_400_400/0/1658757681285?e=1665014400&v=beta&t=I5ty-PWgT_B1uf6acOn4IICX5g5zHT57K6UHPTzHOy0" width="100px;" alt="Foto de Luciano no GitHub"/><br>
        <sub>
          <b>Luciano Paiva</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
</div>	

[⬆ Voltar ao Topo](#projeto-final-módulo-4---api-rest)
