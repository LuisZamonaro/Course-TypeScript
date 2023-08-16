// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function showProductDetails(product:Product) {
    console.log(`O nome do produto é ${product.name}, e seu preço é R$${product.price}`)
    if(product.isAvaliable) {
        console.log('O produto está disponível')
    }
}

const shirt2:Product = {
    name: "Camisa",
    price: 59.90,
    isAvaliable: true
}

showProductDetails(shirt2)
showProductDetails({name: 'Tênis', price: 299.90, isAvaliable: true})

// 2 - propriedade opcional em interface
interface User77 {
    email: string,
    role?: string
}

function showUserDetails(user: User77) {
    console.log(`O usuário tem o e-mail ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é ${user.role}`)
    }
}

const us1:User77 = {email: "luis@teste.com"}
const us2:User77 = {email: "augusto@teste.com", role: "Admin"}

showUserDetails(us1)
showUserDetails(us2)
showUserDetails({email: "zamonaro@teste.com", role: "Moderator"})

// 3 - readonly -. depois de ser atribuído um valor, não pode ser modificado
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string] : number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste"

// 5 - extending interfaces
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const Luis: Human = {
    name: "Luis",
    age: 21
}

const Saitama: SuperHuman = {
    name: "Saitama",
    age: 30,
    superpowers: ["Soco sério", "Socos normais consecutivos"]
}

console.log(Luis)
console.log(Saitama)

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "ShotGun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - aceita apenas modificações através de método (forEach | map)
let myArray: ReadonlyArray<string> = ["maçã", "pera", "melão"]

// myArray[3] = "uva" -> readonly não deixa acrescentar

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas pode usar apenas o número já pré determinado
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]

// const mixedArray: fiveNumbers = [1, true, "false", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Luis", 21]

console.log(anotherUser[0])

anotherUser[0] = "João"

// anotherUser[1] = "teste"

// 9 - tuplas com readonly
function showNumbers77(numbers: readonly [number, number]) {
    // numbers[0] = 10 // readonly não pode alterar
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers77([1,5])