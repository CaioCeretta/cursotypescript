export class Person {
  static defaultAge = 0;

  static defaultCpf = '111.111.111-12';

  constructor(private name: string, private surname: string, private age: number, private _cpf: string) {}

  normalMethod(): void {
    console.log(Person.defaultAge, Person.defaultCpf);
  }

  static createPerson(name: string, surname: string): Person {
    return new Person(name, surname, Person.defaultAge, Person.defaultCpf);
  }
}

const person1 = new Person('Caio', 'Ceretta', 25, '470.204.218.14');
const person2 = Person.createPerson('Alex', 'Ceretta');
console.log(person2);
console.log(person1);
person1.normalMethod();
console.log(Person.defaultAge);
