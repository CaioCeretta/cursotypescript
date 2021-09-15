type TypeName = {
  name: string;
};

type TypeSurname = {
  surname: string;
};

type TypeFullname = {
  fullName(): string;
};

export class Person implements TypeName, TypeSurname, TypeFullname {
  constructor(public name: string, public surname: string) {}

  public fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person('Caio', 'Ceretta');
console.log(person.fullName());
