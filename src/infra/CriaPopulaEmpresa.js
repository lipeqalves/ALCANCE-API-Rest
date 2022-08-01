import DatabaseEmpresaMetodos from "../DAO/DatabaseEmpresaMetodos.js";

const empresas = [{
  empresa: "Roberta soluções informática S.A",
  cnpj: "12.652.984/0001-07",
  email: "robertainfo@hotmail.com",
  telefone: "5511988888888"

}, {
  empresa: "Filipe LTDA",
  cnpj: "34.654.532/0001-08",
  email: "filipe10@hotmail.com",
  telefone: "5511988888888"

}, {
  empresa: "Crescer e Conhecer LTDA",
  cnpj: "56.655.489/0001-09",
  email: "crescerconhecer@hotmail.com",
  telefone: "5511988888888"

}]

try {
  const response = await DatabaseEmpresaMetodos.createTableEmpresa();
  console.log(`Tabela Empresa: ${response}`);

  empresas.forEach(async function (empresa) {
    const resposta = await DatabaseEmpresaMetodos.adicionaEmpresa(empresa);
  });
  console.log('Empresas cadastradas com sucesso!')
} catch (e) {
  console.log("Erro:", e);
}






