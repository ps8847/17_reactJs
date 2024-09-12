
/*

//  1. Basic Types 
//  TypeScript provides static typing for JavaScript.

let isDone: boolean = false;
let count: number = 42;
let name: string = 'John';   

*/

/*

// 2. Arrays
// You can define arrays with specific types.


let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ['a', 'b', 'c'];

*/

/*

// 3. Tuples
// Tuples allow you to define an array with mixed types.


let person: [string, number];
person = ['John', 25]; // Correct

*/

/*

// 4. Enums
// Enums are used to define named constants.


enum Direction {
    North,
    South,
    East,
    West
}

let dir: Direction = Direction.North;

*/

/*

// 5. Functions
// TypeScript provides type annotations for function parameters and return types.


function add(x: number, y: number): number {
    return x + y;
}

let result: number = add(5, 10);

*/

/*

// 6. Optional and Default Parameters
// You can define optional parameters and default values in TypeScript.


function greet(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}`;
}

console.log(greet('John')); // Hello, John
console.log(greet('John', 'Hi')); // Hi, John

*/ 

/*

// 7. Interfaces
// Interfaces are used to define the structure of an object.


interface User {
    name: string;
    age: number;
}

let user: User = {
    name: 'Alice',
    age: 30
};

*/

/*

// 8. Classes
// TypeScript supports object-oriented programming with classes.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

let dog = new Animal('Dog');
dog.speak();

*/

/*

// 9. Inheritance
// Classes can inherit properties and methods from other classes.


class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the parent class constructor
    }

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.

*/

/*

// 10. Access Modifiers
// TypeScript supports public, private, and protected access modifiers.

class Car {
    private engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    public getEngine(): string {
        return this.engine;
    }
}

let car = new Car('V8');
console.log(car.getEngine()); // V8

*/

/*

// 11. Generics
// Generics allow you to create reusable components with different types.

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>('Hello');
let output2 = identity<number>(100);

*/

/*

// 12. Type Aliases
// Type aliases give a name to a specific type.

type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };

*/

/*

// 13. Union Types
// A union type allows a variable to hold more than one type.


let value: string | number;
value = 'Hello';
value = 42;

*/

/*

// 14. Intersection Types
// Intersection types combine multiple types into one.


interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type Person = HasName & HasAge;

let john: Person = { name: 'John', age: 30 };

*/

/*

// 15. Type Assertions
// Type assertions tell the compiler to treat an entity as a specific type.


let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length;

*/

/*

// 16. Never Type
// The never type represents values that never occur.


function throwError(message: string): never {
    throw new Error(message);
}

*/

/*

// 17. Void Type
// The void type is used for functions that don’t return a value.


function logMessage(message: string): void {
    console.log(message);
}

*/

/*

// 18. Type Guards
// Type guards narrow down types in conditional checks.


function isNumber(x: any): x is number {
    return typeof x === 'number';
}

let value: any = 5;
if (isNumber(value)) {
    console.log(value.toFixed(2)); // Now TypeScript knows `value` is a number.
}

*/

/*

// 19. Namespaces
// Namespaces organize code into logical groups.


namespace Utility {
    export function printMessage(msg: string): void {
        console.log(msg);
    }
}

Utility.printMessage('Hello from namespace!');

*/

/*

// 20. Modules
// Modules allow you to export and import code from other files.


// File: math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// File: main.ts
import { add } from './math';
console.log(add(5, 10)); // 15

*/

/*

// 21. Decorators
// Decorators are a special kind of declaration used to modify classes and class members.


function readonly(target: any, key: string): void {
    Object.defineProperty(target, key, {
        writable: false,
    });
}

class Book {
    @readonly
    title: string = 'Typescript Handbook';
}

let myBook = new Book();
myBook.title = 'Another Title'; // Error: Cannot assign to `title` because it is read-only.

*/