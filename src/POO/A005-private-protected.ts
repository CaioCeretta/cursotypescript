import { Colaborator } from "./A004-access-modifier-";


export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
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

export class Udemy extends Empresa {
  constructor() {
    super('Splicenet', '11.111.111/0111-11');
  }

  popColaborator(): Colaborator | null {
    const removedColaborator = this.colaboradores.pop();

    if(removedColaborator) {
      return removedColaborator
    }

    return null;
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Caio', 'Ceretta');
const colaborador2 = new Colaborador('Alex', 'Ceretta');
const colaborador3 = new Colaborador('André', 'Ceretta');
empresa1.addColaborator(colaborador1)
empresa1.addColaborator(colaborador2);
empresa1.popColaborator();
console.log(empresa1);
