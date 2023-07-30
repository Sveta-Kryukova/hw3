function calculateDiscountedPrice (products, discount) {
  if (Array.isArray(products) && typeof discount === 'number') {
  const discountedPrice = products.map((product) => product - (product * discount / 100))

    return discountedPrice
  }

  return 'Invalid input'
}

function calculateTotalPrice (products) {
  if (Array.isArray(products)) {
    const totalPrice = products.reduce((total, product) => total + product)

    return totalPrice
  }

  return 'Invalid input'
}