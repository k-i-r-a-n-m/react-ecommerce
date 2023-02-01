import { createContext, useState,useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems / newItem

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const countCartItems = (cartItem)=>{
  const total = cartItem.reduce((accum,curValue)=>accum+curValue.quantity,0)
}

export const CartDropdownContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount:0
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
   const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
   setCartCount(newCartCount)
  },[cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };

  countCartItems(cartItems)
  
  const value = { isCartOpen, cartItems,cartCount,setIsCartOpen, addItemToCart };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
