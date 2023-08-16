// 1 - importação de arquivos
import importGreet from "./greet";

importGreet()

// 2 - import de variável
import {x} from "./variable"

console.log(x)

// 3 - multiplas importações
import {a, b, myFunction} from './multiple'

console.log(a)
console.log(b)
myFunction()

// 4 - alias
import {somename as name} from './somename'
console.log(name)

// 5 - import all
import * as mynumbers from './numbers'
console.log(mynumbers)

const nX = mynumbers.n1
console.log(nX)
mynumbers.showNumber()

// 6 - importando tipos
import {Human} from './mytype'

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new User("Joâo", 40)

console.log(joao)
console.log(joao.name)