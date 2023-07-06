// 1. Stdout
console.log("1 -> hello world");

// 2. Config the Compiler with
// > npx tsc --init  // command


// 3. Simple Types --> number, boolean, string, bigint, symbol (Contants)

let firstName: string = "Anuj!!";
console.log("2 -> ", firstName);

let secondName: boolean = true;
console.log("2.1 -> ", secondName)

// not possible
// union types can be used


// 4. Not sure Type & Unable to Infer

const json = JSON.parse("55");
console.log("3 -> ", typeof json)


// 5. Any type
let PPERSON: any = '123';
PPERSON = true
console.log(typeof PPERSON)


// 6. Union/Or types

function printStatusCode(code: string) {
    console.log(`My status code is ${code.toUpperCase()}.`)
    return 0
}
console.log(printStatusCode("here comes the paragraph!"))


// 7. Function Return Types

function printStatusCodeReturnType(code: string): number {
    console.log(`My status code is ${code.toUpperCase()}.`)
    return 1212123
}
console.log(printStatusCodeReturnType("here comes the 2nd paragraph!"))

//  NOT WORKING
// function getTime(): string {
//     let x: number = (new Date().getTime());
//     return (<string><unknown>x).toUpperCase()
//   }
// console.log(getTime())


// 8. Member Types, ReadOnly

class Person {
    public constructor(public readonly adhaarCard: string, public pan: string) {
        this.adhaarCard = adhaarCard;
        this.pan = pan;
    }

    public getAdhaarCard(): string {
        return this.adhaarCard;
    }
    public getPanCard(): string {
        return this.pan;
    }
}

let person1: Person = new Person("123123123", "Anuj");
console.log(typeof person1, person1);

console.log(person1, person1.adhaarCard, person1.pan)

person1.pan = "NewAnujPan"
console.log(person1)


// 9. Type Aliases

type CarYear = number
type CarType = string
type CarModel = string
type CarDesign = {
    design: number,
    engine: string,
    gearratio: number
}
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel,
    cardesign: CarDesign
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const carDesign: CarDesign = {
    design: 123,
    engine: "172 HP, 123/14",
    gearratio: 2 / 5
}
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
    cardesign: carDesign
};

console.log(car)
