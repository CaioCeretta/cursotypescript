type hasName = { name: string };
type hasSurname = { surname: string };
type hasAge = { age: number };
type Pessoa = hasAge & hasName & hasSurname;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;

const pessoa1: Pessoa = {
  name: 'Caio',
  surname: 'Ceretta',
  age: 25,
};

console.log(pessoa1);

export { pessoa1 };
