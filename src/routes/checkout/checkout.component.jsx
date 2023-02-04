import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cardDropdown.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems,addItemToCart } = useContext(CartDropdownContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <button>-</button> &nbsp;
              <span>{quantity}</span> &nbsp;
              <button onClick={() => addItemToCart(cartItem)}>+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
