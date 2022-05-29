/*
Para este exercício utilize o recurso de Async/Await do Javascript.
Será necessário buscar as informações em uma api externa (ViaCep).
Baixar o resultado, tratar o retorno para mostrar logradouro, bairro - localidade. 

Exemplo de resultado obtido na api ViaCep:=
    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
      
Exemplo de como a função deve retornar: 

"Praça da Sé, Sé - São Paulo"

Documentação da API:  https://viacep.com.br/

*/

const axios = require("axios");
const readlineSync = require('readline-sync');
const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";

/*
    TODO 1:
    - Implemente a função getAddressByCep com o recurso de Async/Await.
    - A função deve retornar nesse formato: logradouro, bairro - localidade.
    - A função deve retornar o erro `CEP não encontrado` caso o cep não seja encontrado.
*/

const cep = readlineSync.question('What is your Zip Code? ');
const getCep = async (cep) => {
  try {
    const cepResult = await axios.get(`${BASE_API_VIA_CEP}/${cep}/json/`);
    return cepResult.data;
  } catch (error) {
    console.log("Ocorreu um erro", error)
    throw new Error ("CEP não encontrado");
  }
};

async function getAddressByCep(cep) {
  // implemente aqui
  const cepResult = await getCep(cep);
  const adress = `${cepResult.logradouro}, ${cepResult.bairro} - ${cepResult.localidade}`

  console.log(adress)
  return adress;
}

getAddressByCep(cep);

module.exports = { getAddressByCep };
