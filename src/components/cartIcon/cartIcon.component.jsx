import {useContext} from 'react'
import { CartDropdownContext } from '../../contexts/cardDropdown.contex';

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

// css
import "./cartIcon.styles.scss";

const CartIcon = () => {
    const {setIsCartOpen} = useContext(CartDropdownContext)

  const cartHandler = (event) => {
    setIsCartOpen((preState) => !preState);
  };

  return (
    <div className="cart-icon-container" onClick={cartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
