// 1 - generics
function showData<T>(arg: T) : string { // o T aceita qualquer tipo e depois a função converte para string
    return `O dado é; ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData(["teste"]))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99, category: "roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj)) a única que mostra e a necessária é 'name', que não é dita na const

// 3 - generics com interface
interface myObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car77 = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar: Car77 = {name: "Saveiro", wheels:4, engine:1.6, color: "gray"}
const myPen:Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "red"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key77: K) {
    // return `A chave ${key77} está presente no objeto e tem o valor de ${obj[key77]}` // K só pode ser usado dentro de T
}

const server = {
    hd: "1TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "hd"))
//console.log(getSomeKey(server, 'teste'))

// 5 - keyof type operator
type Character77 = {name: string, age: number, hasDriveLicence: boolean}

type C = keyof Character

function showCharName(obj: Character77, name?: C, age?: C):string | number{
    if(name) {
        return `${obj[name]}`
    }
    if(age) {
        return `${obj[age]}`
    }
    return
}

const myChar:Character77 = {
    name: "Luis",
    age: 21,
    hasDriveLicence: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))

// 6 - typeof type operator
const userName99: string = "Luis"

const usernNme88: typeof userName99 = "Augusto"

// const userName55: typeof userName99 = 20

type x = typeof userName99

const userName44: x = "Zamonaro"

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck["km"]

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)

// 8 - conditional types
interface A {}

interface Teste {
    showName(): string
}

interface B extends A {}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType="teste"

type myTypeB = Teste extends {showNumber(): string} ? string : boolean

// 9 - template literals
type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text" // ao passar o cima em cima do CustomType, dá pra ver que ele só aceita esse valor

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`