import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cardDropdown.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartDropdownContext);
  
  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
