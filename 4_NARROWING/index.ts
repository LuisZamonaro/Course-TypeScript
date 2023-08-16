// 1 - type guard
function sum(a: number | string, b: number | string) {
    if( typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar a soma!")
    }
}

sum("77.7", "79.8")
sum(555.723, 777.777)
sum("77", 77)

// 2 - checando se o valor existe

function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        }
        if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([7,7,7])
operations([7,7,7], "sum")
operations([7,7,7], "multiply")

// 3 - instace of // detectar uma varíavel que pertence à uma classe
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(jhon)
userGreeting(paul)

// 4 - operador in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão") 

function showDogDetails(dog: Dog) {

    if("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log("O cachorro é um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)

// 5 - Desafio 3 

class Avaliation {
    name
    stars
    noStars

    constructor(name: string, stars?: number, noStars? : boolean) {
        this.name = name
        if(stars) {
            this.stars = stars
        }
        if(noStars) {
            this.noStars = noStars
        }
    }
}

const user4002 = new Avaliation("Luis", 1)
const user8922 = new Avaliation("Augusto", 0)

function userReview(avaliation: Avaliation) {
    if("stars" in avaliation) {
       console.log(`O ${avaliation.name} deu ${avaliation.stars} estrelas`)
    }
    else {
        console.log(`Você não avaliou o prodruto`)
    }
}

userReview(user4002)
userReview(user8922)

// outra forma
type Review = number | boolean

function showUserReview(review: Review) {

    if(!review) {
        console.log("Você não avaliou o produto")
        return
    }

    console.log(`A nota que você deu foi: ${review}, obrigado`)

}

showUserReview(5)
showUserReview(false)
showUserReview(1)
