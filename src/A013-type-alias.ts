type Idade = number;

type Person = {
  name: string;
  age: Idade;
  salary: number;
  favoriteColor?: string;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Klab';
type favoriteColor = colorCMYK | colorRGB;

const person = {
  name: 'Caio',
  age: 25,
  salary: 20000000,
};

export function setFavoriteColor(pessoa: Person, color: favoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Magenta'));
console.log(person);
// console.log(person);
