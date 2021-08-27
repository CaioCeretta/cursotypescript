function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Caio',
  sobrenome: 'Ceretta',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoa.exibirNome();

export { pessoa };
