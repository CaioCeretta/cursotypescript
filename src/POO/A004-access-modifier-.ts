
export class Company {
  readonly name: string;
  protected readonly colaborators: Colaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addColaborator(colaborator: Colaborator): void {
    this.colaborators.push(colaborator);
  }

  showColaborators(): void {
    for(const colaborator of this.colaborators) {
      console.log(colaborator);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborator(): Colaborator | null {
    const colaborator = this.colaborators.pop();
    if(colaborator) return colaborator;

    return null;
  }
}

export class Colaborator {
  constructor(public readonly name: string, public readonly surname: string){}
}

const company1 = new Udemy();
const colaborator1 = new Colaborator('Caio', 'Ceretta');
const colaborator2 = new Colaborator('Alex', 'Ceretta');
const colaborator3 = new Colaborator('André', 'Ceretta');

company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);
const removedColaborator = company1.popColaborator();
console.log(removedColaborator)
console.log(company1);

