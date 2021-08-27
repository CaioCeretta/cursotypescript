/* eslint-disable */

let nome: string = 'Caio';
let idade: number = 30;
let adulto: boolean = true;
let símbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;


/* Arrays */

let numberArray: Array<number> = [1, 2, 3];
let stringArray: Array<string> = ['a', 'b', 'c'];

//Da outra maneira

let numberArray2: number[] = [1, 2, 3];
let stringArray2: string[] = ['a', 'b', 'c'];

/* Objetos */

let pessoa: {name: string, idade: number, adulto?: boolean} = {
    idade: 25,
    name: 'Caio Ceretta Soares'
};

// Outra maneira

// let pessoa: Pessoa = {
//     age: 25,
//     name: 'Caio'
// };

/* Functions */

function soma(x: number, y:number) {
    return x + y;
}




const soma2: (x: number, y: number) => number = (x, y) => x + y;
