const addToDb = id => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      shoppingCart[id] = newQuantity
    } else {
      shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
  
  const getStoredCart = () => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart)
      if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
  }
  
  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
  }
  const productsAndCartData = async () => {
    const productsData = await fetch('job.json')
    const products = await productsData.json()
  
    const savedCart = getStoredCart()
    const initialCart = []
    for (const id in savedCart) {
      const foundProduct = products.find(product => product.id === id)
      if (foundProduct) {
        const quantity = savedCart[id]
        foundProduct.quantity = quantity
        initialCart.push(foundProduct)
      }
    }
  
    return { products, initialCart }
  }
  
  export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart,productsAndCartData }