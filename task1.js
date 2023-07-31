const products = [{
  name: 'potato',
  price: 30,
},
{
  name: 'carrot',
  price: 40,
}]
function calculateDiscountedPrice (products, discount) {
  if (Array.isArray(products) && 
    products.every((obj) => typeof obj === 'object' 
      && 'name' in obj 
      && 'price' in obj) 
    && typeof discount === 'number') {
  const discountedPrice = products.map((product) => ({
      name: product.name,
      price: product.price - product.price * discount / 100,
    }
  ))

    return discountedPrice
  }

  return 'Invalid input'
}

function calculateTotalPrice (products) {
  if (Array.isArray(products)) {
    const totalPrice = products.reduce((total, product) => total + product.price, 0)

    return totalPrice
  }

  return 'Invalid input'
}

console.log(calculateTotalPrice(products))