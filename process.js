
// list all values from Global variable -> Process
// console.log(process);

console.log(process.argv);
console.log(`O primeiro argumento da lista, é: ${process.argv[0]}`);

// a grande ideia do uso de Process, é acessar/pegar os arqgumentos informados como parêmetro ao chamar/inicializar a aplicação/processo
// semelhante a função main(parameters[]) em C/C++

// Outra forma de executar process é:
// node <my-app.js> --name "Luis Fernando" --greeting "Hy, Do you from ?"