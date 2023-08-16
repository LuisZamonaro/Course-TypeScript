"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é; ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste"]));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Saveiro", wheels: 4, engine: 1.6, color: "gray" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "red" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key77) {
    // return `A chave ${key77} está presente no objeto e tem o valor de ${obj[key77]}` // K só pode ser usado dentro de T
}
const server = {
    hd: "1TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "hd"));
function showCharName(obj, name, age) {
    if (name) {
        return `${obj[name]}`;
    }
    if (age) {
        return `${obj[age]}`;
    }
    return;
}
const myChar = {
    name: "Luis",
    age: 21,
    hasDriveLicence: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// 6 - typeof type operator
const userName99 = "Luis";
const usernNme88 = "Augusto";
const userName44 = "Zamonaro";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text"; // ao passar o cima em cima do CustomType, dá pra ver que ele só aceita esse valor
