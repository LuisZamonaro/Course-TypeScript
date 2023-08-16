"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("77.7", "79.8");
sum(555.723, 777.777);
sum("77", 77);
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([7, 7, 7]);
operations([7, 7, 7], "sum");
operations([7, 7, 7], "multiply");
// 3 - instace of // detectar uma varíavel que pertence à uma classe
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDogDetails(turca);
showDogDetails(bob);
// 5 - Desafio 3 
class Avaliation {
    constructor(name, stars, noStars) {
        this.name = name;
        if (stars) {
            this.stars = stars;
        }
        if (noStars) {
            this.noStars = noStars;
        }
    }
}
const user4002 = new Avaliation("Luis", 1);
const user8922 = new Avaliation("Augusto", 0);
function userReview(avaliation) {
    if ("stars" in avaliation) {
        console.log(`O ${avaliation.name} deu ${avaliation.stars} estrelas`);
    }
    else {
        console.log(`Você não avaliou o prodruto`);
    }
}
userReview(user4002);
userReview(user8922);
function showUserReview(review) {
    if (!review) {
        console.log("Você não avaliou o produto");
        return;
    }
    console.log(`A nota que você deu foi: ${review}, obrigado`);
}
showUserReview(5);
showUserReview(false);
showUserReview(1);
