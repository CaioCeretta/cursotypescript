export class Engine {
  turnOn(): void {
    console.log('Engine is turned on...');
  }

  accelerate(): void {
    console.log('Engine is accelerating...');
  }

  stop(): void {
    console.log('Engine is stopped...');
  }

  turnOff(): void {
    console.log('Engine is turned off...');
  }
}

export class Car {
  private readonly engine: Engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  stop(): void {
    this.engine.stop();
  }

  turnOff(): void {
    this.engine.turnOff();
  }
}

const car = new Car();
car.turnOn();
car.accelerate();
car.stop();
car.turnOff();
