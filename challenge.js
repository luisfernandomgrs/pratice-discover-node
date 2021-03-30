/* Crie 02 arquivos JavaScript.
 * O primeiro irá exportar uma função chamada getFlag()
 * que receberá um arqumento do tipo String.
 * Essa função deverá buscar dentro do array Process.argv a flag desejada, que é a String
 * e retornar o valor da String.
 * 
 * O segundo irá importar a função e passar a flag desejada.
 * 
 * Iremos rodar no terminal o segundo arquivo passadno as flags --name e --greeting
 * para que seja impresso no terminal a saudação e o nome da pessoa.
*/

const getFlag = require("./challenge-export");

console.log(getFlag("name"));
console.log(getFlag("greeting"));


// by Teacher...
const getValueTeacher = require("./challenge-export-byTeacher");
console.log(`Oi ${getValueTeacher("--name")}, `);