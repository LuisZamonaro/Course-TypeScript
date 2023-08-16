"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}, e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log('O produto está disponível');
    }
}
const shirt2 = {
    name: "Camisa",
    price: 59.90,
    isAvaliable: true
};
showProductDetails(shirt2);
showProductDetails({ name: 'Tênis', price: 299.90, isAvaliable: true });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const us1 = { email: "luis@teste.com" };
const us2 = { email: "augusto@teste.com", role: "Admin" };
showUserDetails(us1);
showUserDetails(us2);
showUserDetails({ email: "zamonaro@teste.com", role: "Moderator" });
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const Luis = {
    name: "Luis",
    age: 21
};
const Saitama = {
    name: "Saitama",
    age: 30,
    superpowers: ["Soco sério", "Socos normais consecutivos"]
};
console.log(Luis);
console.log(Saitama);
const arnold = {
    name: "Arnold",
    type: "ShotGun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - aceita apenas modificações através de método (forEach | map)
let myArray = ["maçã", "pera", "melão"];
// myArray[3] = "uva" -> readonly não deixa acrescentar
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, "false", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Luis", 21];
console.log(anotherUser[0]);
anotherUser[0] = "João";
// anotherUser[1] = "teste"
// 9 - tuplas com readonly
function showNumbers77(numbers) {
    // numbers[0] = 10 // readonly não pode alterar
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers77([1, 5]);
