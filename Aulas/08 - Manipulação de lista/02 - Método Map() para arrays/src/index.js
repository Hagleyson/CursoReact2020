let numbers = [1, 2, 3, 4, 5];
/*map() faz uma iteração sobre o array
e faz o que é pedido na função
ele recebe 3 argumentos 
1
item corrente é o item que esta em análise
2
o indice
3
o array que vai ser analizado

*/
let doubles = numbers.map((cur, idx, arr) => {
  //só para tirar alguma duvida
  console.log(idx);
  console.log(arr);
  return cur * 2;
});
console.log("numbers " + numbers);
console.log("doubles: " + doubles);
