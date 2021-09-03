export function funcao(this: Date, arg1: string, age: number): void {
  console.log(this);
  console.log(arg1, age);
}

funcao.call(new Date(), 'Caio', 25);
