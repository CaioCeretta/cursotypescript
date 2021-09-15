/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("I can't write without a tool");
      return;
    }

    this.tool.write();
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} is typing...`);
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing...`);
  }
}

const writer = new Writer('Caio');
const pen = new Pen('bic');
const typewriter = new Typewriter('casio');

writer.tool = typewriter;

writer.write();
