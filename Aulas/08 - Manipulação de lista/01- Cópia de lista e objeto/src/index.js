let oldState = ["javaScript", "PHP", "Python"];
//copiando um array com spread operator
//... spread operator
let newState = [...oldState];
/*push é do javaScript 
puro ele adiciona um novo arquivo ao array*/
newState.push("C#", "Java");

let pessoa = { name: "Hagleyson", idade: 25 };
let newPessoa = { ...pessoa };
//outra forma de copiar
let newPessoa1 = Object.assign({}, newPessoa);
newPessoa.name = "HagleysonFernandes";
newPessoa.idade = 26;

console.log("velho state: " + oldState);
console.log("Novo State: " + newState);
console.log("Nome: " + pessoa.name + " idade: " + pessoa.idade);
console.log("Nome2: " + newPessoa.name + " idade: " + newPessoa.idade);
console.log("Nome2: " + newPessoa1.name + " idade: " + newPessoa1.idade);
