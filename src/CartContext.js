import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productStore";

// COntext (cart, addToCart, removeCart
// Provider give App access to all inside in context
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // cart values: [ {id: 1, quantity: 2 } ]
  function getProductQuantity(id) {
    // search for current ID
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
        return 0
    }
    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 0) { // product is not in Cart
        // append to existing list with products new
        setCartProducts(
            [ 
                ...cartProducts,
                {
                    id: id,
                    quantity: 1

                }   
            ]
        )
    } else { // product is in cart
        setCartProducts(
            cartProducts.map(
                product => product.id === id 
                ? { ...product, quantity: product.quantity + 1 } 
                : product  // adding product like regular record
                
            )
        ) 
    }
  }

  function deleteFromCart(id) {
    setCartProducts(
        cartProducts =>
        cartProducts.filter(currentProduct => {
            return currentProduct.id !== id // omit ID to new created Array
        }) 
    )    
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 1) {
        deleteFromCart(id)
    } else {
        setCartProducts(
            cartProducts.map(
                product => product.id === id 
                ? { ...product, quantity: product.quantity - 1 } 
                : product  // adding product like regular record
                
            )
        ) 
    }
  }
  function getTotalCost(){
    let totalCost = 0
    cartProducts.map((cartItem) => {
        const productData = getProductData(cartItem.id)
        totalCost += (productData.price * cartItem.quantity)

        return totalCost
    })
    
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider