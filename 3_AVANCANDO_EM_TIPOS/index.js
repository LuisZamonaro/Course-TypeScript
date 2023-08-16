"use strict";
// 1 - arrays
let numbers = [1, 7, 10];
numbers.push(5);
console.log(numbers[2]);
const nomes = ["Luzia", "Augusto"];
// nomes.push(4)
// 2 - outra sintaxe array
const nums = [20, 7];
nums.push(2023);
console.log(nums);
console.log(nums[0]);
console.log(nums[5]);
// 3 - any
const array1 = [1, true, "teste", [], { nome: "Luis" }];
console.log(array1);
array1.push([1, 2, 3]);
console.log(array1);
// 4 - parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(20, 7);
// 5 - retorno de função
function greeting2(name) {
    return `Olá ${name}`;
}
console.log(greeting2("Matheus"));
// // 6 - funcao anonima
// setTimeout(function () {
//     const sallray: number = 1000
//     // console.log(parseFloat(sallray)) // parseFloat pode ser usado somente com tipo string
//     // console.log(sallray)
// }, 2000)
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates " + coord.x);
    console.log("Y coordinates " + coord.y);
}
const objCoord = { x: 764, y: 444 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Luzia", surname: "Zamonaro" };
console.log(pessoaObj);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    // com o '?' da pra fazer if
    if (c) {
        console.log("C: " + c);
    }
    // console.log("C: " + c) -> undefined, quando sem valor
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// showNumbers(1,2) -> se não tivesse o ?, daria erro
// 9 - validando argumento opcional // o primeiro argumento não pode ser opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Luis", "Augusto"));
console.log(advancedGreeting("Luis"));
// 10 - union type 
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
const array2 = [1, "teste", true];
// 11 - avançando em union types
function showUserRole(role) {
    // if (role === true) {
    //     return `A função do usuário é: Admin`
    // }
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1000);
showId("419");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.y}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
showCoords(coordObj);
const somePerson = { name: "Luis", age: 21 };
console.log(somePerson);
// type PersonType = {
//     age:number
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(direction);
}
showDirection("left");
// showDirection("top")
// 16 - non null assertion operators // manipular DOM com ts, precisa da "!"
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint // para valores mais altos
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 200n);
// 18 - symbol // é uma maneira de obter valores únicos
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB); // valores
console.log(symbolA === symbolB); // valores e tipos
