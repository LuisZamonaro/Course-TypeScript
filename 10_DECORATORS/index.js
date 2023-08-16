"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("Excutando decorator.");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClasss {
    testing() {
        console.log("terminando execução do método.");
    }
}
__decorate([
    myDecorator()
], myClasss.prototype, "testing", null);
const myObjt = new myClasss();
myObjt.testing();
// 2 - multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("executou a.");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("executou b.");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("executou c.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução.");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor.name);
    {
        if (constructor.name === "Userr") {
            console.log("Criando usuário...");
        }
    }
}
let Userr = class Userr {
    constructor(name) {
        this.name = name;
    }
};
Userr = __decorate([
    classDec
], Userr);
const luizao = new Userr("Luis");
console.log(luizao);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machinee {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machinee.prototype, "showName", null);
const trator = new Machinee("Trator");
console.log(trator.showName());
// 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const zuhco = new Monster("Zuhco", 68);
console.log(zuhco);
// 6 - property decorator
// 1 - 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class TheId {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], TheId.prototype, "id", void 0);
const newItemm = new TheId("1");
console.log(newItemm);
// 7 - exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pencil = class Pencil {
    constructor(id) {
        this.id = id;
    }
};
Pencil = __decorate([
    createdDate
], Pencil);
const newBook = new Book(50);
const newPencil = new Pencil(30);
console.log(newBook);
console.log(newPencil);
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const somePost = new Post();
somePost.post("Meu primeiro post!", somePost.alreadyPosted);
somePost.post("Meu segundo post!", somePost.alreadyPosted);
// 9 - exemplo real property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
                console.log(value);
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin("pedro123456");
let lee = new Admin("lee");
