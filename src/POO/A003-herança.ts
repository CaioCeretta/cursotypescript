export class Pessoa {


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
  public getCompleteName(): string {
    return `${this.name} ${this.surname}`;
  }
}
