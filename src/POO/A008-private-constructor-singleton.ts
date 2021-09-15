// Singleton - GoF

export class Database {
  private static database: Database;

  private constructor(private host: string, private user: string, private password: string) {}

  connect(): void {
    console.log(`Connected: ${this.host} ${this.user} ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database1 = Database.getDatabase('localhost', 'adm', '123');
database1.connect();

const database2 = Database.getDatabase('localhost', 'adm', '123');
database2.connect();

const database3 = Database.getDatabase('localhost', 'adm', '123');
database3.connect();

const database4 = Database.getDatabase('localhost', 'adm', '123');
database4.connect();

console.log(database1 === database2);
