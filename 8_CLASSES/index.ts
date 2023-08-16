// 1 - Campos em classe
class User123 {
    name!: string // ! -> será usado, mas sem ser iniciada com valores
    age!: number
}

const luis = new User123()

console.log(luis)

luis.name = "Luis"
// luis.job = "Programmer"

console.log(luis)

// 2 - constructor
class newUser123 {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new newUser123("João", 50)

console.log(joao)

// const predro = new newUser123(12,12)

// 3 - campo readonly

class Car {
    name
    readonly wheels123 = 4

    constructor(name: string) {
        this.name = name
    }
}

const camaro = new Car("Camaro")

console.log(camaro)
console.log(camaro.wheels123)
camaro.name = "Camaro 2012"
console.log(camaro)
// camaro.wheels123 = 5

// 4 - herança e super
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator1 = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator1)
console.log(destroyer)

// 5 - métodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}


const zangado = new Dwarf("Zangado")

console.log(zangado.name)
zangado.greeting()


// 6 - this
class Truck33 {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`O caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
    }
}

const volvo = new Truck33("Volvo", 400)
const scania = new Truck33("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullname() {
        return this.name + " " + this.surname
    }
}

const luisZamonaro = new Person("Luis", "Zamonaro")
console.log(luisZamonaro.fullname)

// 8 - setter
class TheCoords {
    x!: number
    y!: number

    set fillX(x: number) {
        if(x === 0) {
            return
        }

        this.x= x 

        console.log("X inserido com sucesso")
    }

    set fillY(y: number) {
        if(y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new TheCoords()

myCoords.fillX = 0
myCoords.fillY = 88
myCoords.fillX = 10

console.log(myCoords)
console.log(myCoords.getCoords)

// 9 - implements
interface showTitle {
    itemTitile(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitile(): string {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new blogPost("Olá Mundo")

console.log(myPost.itemTitile())

class TestingInterface implements showTitle {
    title
    
    constructor(title: string) {
        this.title = title
    }

    itemTitile(): string {
        return `O título é: ${this.title}`
    }
}

// 10 - override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Outra coisa")
    }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - public
class H {
    public x = 10
}

class I extends H {

}

const hInstance = new H()
console.log(hInstance.x)
const iInstance = new I()
console.log(iInstance.x)

// 12 - protected
class EE {
    protected x = 10

    protected protectedMethod() {
        console.log("Este método é protegido")
    }
}

class FF extends EE {
    show() {
        console.log("X: " + this.x )
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const ffInstance = new FF()

ffInstance.show()

ffInstance.showProtectedMethod()

// 13 - private
class PrivateClass {
    private name = "Private"

    showCharName() {
        return this.name
    }

    private privateMethod() {
        console.log("Método privado")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new PrivateClass()

// console.log(pObj.name)

console.log(pObj.showCharName())

// console.log(pObj.privateMethod)

pObj.showPrivateMethod()

// 14 - static members
class StaticMebers {
    static prop = "Teste static"

    static staticMethod() {
        console.log("Este é um método estático")
    }
}

console.log(StaticMebers.prop) // isto só é possivel, devido ao static
StaticMebers.staticMethod()

// 15 - generic class
class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `o frist é: ${this.first}`
    }

}

const newItem = new Item("Caixa", "Surpresa")

console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.first)

// 16 - parameter properties
class ParameterProperties {
    constructor(public name: string,private qty:number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    showPrice() {
        return this.price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name)
console.log(newShirt.showPrice())
console.log(newShirt.showQty)

// 17 - class expressions
const myClass = class<T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Rafael")

console.log(pessoa)
console.log(pessoa.name)

// 18 - abstract class

abstract class AbstractClass {
    abstract showname(): void
}

// const newobj778 = new AbstractClass()

class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showname() {
        console.log(`O nome é: ${this.name}`)
    }
}

const newAbstractObject = new AbstractExample("Josias")

newAbstractObject.showname()

// 19 - relações entre classes
class Dogg {
    name!: string
}

class Catt {
    name!: string
}

const doguinhoo: Dogg = new Catt()

console.log(doguinhoo)