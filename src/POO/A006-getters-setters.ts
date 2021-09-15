export class Person {
  constructor(private name: string, private surname: string, private age: number, private _cpf: string) {}

  set cpf(cpf: string) {
    console.log('Setter chamado');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('Getter chamado');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Caio', 'Ceretta', 25, '470.204.218.14');
person.cpf = '470.204.218.11';
console.log(person.cpf);
