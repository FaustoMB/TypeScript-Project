(() => {
  // const login = (email: string, password: string) => {
  //   console.log(email, password);
  // }
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'f@f.com.co',
    password: 12121212
  });

  type Sizes = 'S' |'M' |'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes

  }) => {
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


})();