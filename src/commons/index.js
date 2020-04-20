export const parseCurrency = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const calcCostProductList = array =>
  array.reduce((sum, product) =>
    sum + (product.price * product.quantity), 0)

export const countProductList = array => {
  console.log('Zoo');

  return array.reduce((sum, product) => sum + product.quantity, 0)
}