

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborator(colaborador: Colaborador): void  {
      this.colaboradores.push(colaborador);
  }

  showColaborators(): void {
    for(const colaborator of this.colaboradores) {
      console.log(colaborator);
    }
  }

  public getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const empresa1 = new Empresa('Splicenet', '11.111.111/0111-11');
const colaborador1 = new Colaborador('Caio', 'Ceretta');
const colaborador2 = new Colaborador('Alex', 'Ceretta');
const colaborador3 = new Colaborador('André', 'Ceretta');
empresa1.addColaborator(colaborador1)
console.log(empresa1.getNome(), empresa1.);
