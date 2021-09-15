/**
 * Diferença entre Type e Interface
 * Interface é mais usada para modelar objetos
 */

interface TypeName {
  name: string;
}

interface TypeSurname {
  surname: string;
}

type TypeFullname = {
  fullName(): string;
};

type TypePerson = TypeName & TypeSurname & TypeFullname;

interface TypePerson2 extends TypeName, TypeSurname, TypeFullname {}

type Numero = number | string;

const objPerson: TypePerson2 = {
  fullName() {
    return `${this.name} ${this.surname} agora tá ok`;
  },
  name: 'Caio',
  surname: 'Ceretta',
};

export class Person implements TypePerson2 {
  constructor(public name: string, public surname: string) {}

  public fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person('Caio', 'Ceretta');
console.log(person.fullName());
console.log(objPerson.fullName());
