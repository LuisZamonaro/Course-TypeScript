// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!")

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Excutando decorator.")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClasss {
    @myDecorator()
    testing() {
        console.log("terminando execução do método.")
    }
}

const myObjt = new myClasss()

myObjt.testing()

// 2 - multiplos decorators
function a() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou a.")
    }
}

function b() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou b.")
    }
}

function c() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou c.")
    }
}

class MultipleDecorators { // o mais próximo da função é executado primeiro
    @c()
    @a()
    @b()
    testing() {
        console.log("Terminando execução.")
    }
}

// 3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor.name) ;{
        if(constructor.name === "Userr") {
            console.log("Criando usuário...")
        }
    }
}

@classDec
class Userr {
    name

    constructor(name: string) {
        this.name = name
    }
}

const luizao = new Userr("Luis")

console.log(luizao)

// 4 - method decorator
function enumerable(value: boolean) {
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Machinee {
    name

    constructor(name: string) {
        this.name = name
    }
    @enumerable(false)
    showName() {
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machinee("Trator")

console.log(trator.showName())

// 5 - acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}

const zuhco = new Monster("Zuhco", 68)

console.log(zuhco)

// 6 - property decorator
// 1 - 00001
function formatNumber() {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class TheId {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItemm = new TheId("1")

console.log(newItemm)

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}


@createdDate
class Book {
    id

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pencil {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(50)
const newPencil = new Pencil(30)

console.log(newBook)
console.log(newPencil)

function checkIfUserPosted() {
    return function (
      target: Object,
      key: string | symbol,
      descriptor: PropertyDescriptor
    ) {
      const childFunction = descriptor.value;
      descriptor.value = function(...args: any[]) {
        if (args[1] === true) {
          console.log("Usuário já postou!")
          return null;
        } else {
          return childFunction.apply(this, args);
        }
      }
      return descriptor;
    };
  }
  
  class Post {
    alreadyPosted = false
  
    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
      this.alreadyPosted = true
      console.log(`Post do usuário: ${content}`)
    }
  }
  
  const somePost = new Post()
  
  somePost.post("Meu primeiro post!", somePost.alreadyPosted)
  
  somePost.post("Meu segundo post!", somePost.alreadyPosted)

// 9 - exemplo real property decorator
  function Max(limit: number) {
    return function(target: Object, propertyKey: string) { 
      let value : string;
      const getter = function() {
        return value;
      };
      const setter = function(newVal: string) {
        if(newVal.length > limit) {
          console.log(`O valor deve ter no máximo ${limit} dígitos.`)
          return
        }
        else {
          value = newVal;
          console.log(value)
        }      
      }; 
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      }); 
    }
  }
  
  class Admin {
    @Max(10)
    username
  
    constructor(username: string) {
      this.username = username
    }
  }
  
  let pedro = new Admin("pedro123456")
  let lee = new Admin("lee")

  