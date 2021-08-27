// Maneiras mais comuns Array<T> - T[]

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concat = concatStrings('Caio ', 'Ceretta ', 'Soares');
const upper = toUpperCase('Caio ', 'Ceretta ', 'Soares');

console.log(result);
console.log(concat);
console.log(upper);
