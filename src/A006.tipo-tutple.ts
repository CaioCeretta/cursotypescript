// Tuple

const clientData: readonly [number, string] = [1, 'Caio'];
const clientData2: [number, string, string] = [1, 'Caio', 'Ceretta'];
const clientData3: [number, string, string?] = [1, 'Caio'];
const clientData4: [number, string, ...string[]] = [1, 'Caio', 'Ceretta', 'Soares', 'dos', 'Santos'];

// clientData[0] = 5;

// clientData.pop();
console.log(clientData);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// Readonly Array
const array1: readonly string[] = ['blabla'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
