(() => {
  let prices = [1,2,2,1,1,212];
  // prices.push('asa');
  // prices.push(true);
  // prices.push({});
  prices.push(1212);

  prices = [1,2,2];

  let prices2 = [1,2,2,1,1,212,'hola',true];
  // prices2.push('asa');
  // prices2.push(true);
  // prices2.push({});
  // prices2.push(1212);

  let products = ['hola',true];
  products.push(false);

  let mixed: (number | string | boolean | object) [] = ['hola',true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([])

  let numbers = [1,2,2,1,1,212];
  numbers.map(item => item * 2);
})();