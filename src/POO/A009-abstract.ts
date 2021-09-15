/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
export abstract class Character {
  protected abstract emoji: string;

  constructor(protected name: string, protected damage: number, protected health: number) {}

  attack(character: Character) {
    this.scream();
    character.loseHealth(this.damage);
  }

  loseHealth(attackDamage: number): void {
    this.health -= attackDamage;
    console.log(`${this.emoji} - ${this.name} now have ${this.health} HP`);
  }

  abstract scream(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  scream(): void {
    console.log(`${this.emoji} IAHAHUYA`);
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  scream(): void {
    console.log(`${this.emoji} NHURNHURHAMBURGUERNHURNHUR`);
  }
}

const warrior = new Warrior('Regina', 100, 1000);
const demon = new Monster('Isabelle', 87, 1000);

warrior.attack(demon);
warrior.attack(demon);
warrior.attack(demon);
demon.attack(warrior);
demon.attack(warrior);
demon.attack(warrior);
