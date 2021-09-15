/* eslint-disable max-classes-per-file */
export class ShoppingCart {
  private readonly products: Product[] = [];

  addProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  productQuantity(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce((sum, product) => (sum += product.price), 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Camiseta', 49.9);
const product2 = new Product('Caneca', 25);
const product3 = new Product('Caneta', 1.9);

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(product1, product2, product3);
console.log(shoppingCart.productQuantity());
