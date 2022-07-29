import DatabaseEmpresaMetodos from "../DAO/DatabaseEmpresaMetodos.js";
import DAO from "../DAO/DAO.js";

const empresas = [{
   empresa: "Roberta soluções informática S.A",
   cnpj: "12353220000102",
   email: "robertainfo@hotmail.com",
   telefone: "2196805642"
  
  },

  {
    empresa: "Filipe LTDA",
    cnpj: "12345923000103",
    email: "filipe10@hotmail.com",
    telefone: "117680546"
   
 }]

 try {
    await DAO.ativaChavesEstrangeiras();
    const response = await DatabaseEmpresaMetodos.createTableEmpresa();
    console.log(`Tabela Empresa: ${response}`);

    empresas.forEach(async function (empresa) {
        const resposta = await DatabaseEmpresaMetodos.adicionaEmpresa(empresa);
        console.log(resposta);
      });
    } catch (e) {
      console.log("Erro:", e);
    }


  



