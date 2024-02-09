(() => {
  type Sizes = 'S' |'M' |'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes

  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'producto1',
    createdAt: new Date(),
    stock: 12
  });
  addProduct({
    title: 'producto2',
    createdAt: new Date(),
    stock: 12,
    size: 'XL'
  });

  console.log(products)

  products.push({
    title:'producto3',
    createdAt: new Date(),
    stock: 12,
    size: 'M'
  })

  console.log(products)
})();