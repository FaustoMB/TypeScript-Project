import { addProduct, calcStock, products } from './product.service'

addProduct({
  title: 'producto1',
  createdAt: new Date(),
  stock: 5,
});

addProduct({
  title: 'producto2',
  createdAt: new Date(),
  stock: 6,
  size: 'XL'
});

console.log(products);

const total = calcStock();
console.log(total)