export class Person {


  constructor(public name: string, public surname: string, private age: number, protected cpf: string) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.cpf = cpf;
  }

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Student extends Person {

  getFullName(): string {
    return `Isso vem do Student ${this.name} ${this.surname}`;
  }
}

export class Customer extends Person {
  getFullName(): string {
    return `Isso vem do Customer ${this.name} ${this.surname}`
  }
}

const student = new Student('Caio', 'Ceretta', 25, '470.204.218.14', '0001');
const customer = new Customer('Caio', 'Ceretta', 25, '470.204.218.14');
const person = new Person('Caio', 'Ceretta', 25, '470.204.218.14');


console.log(person.getCompleteName());
console.log(student.getFullName());
console.log(customer.getCompleteName());

