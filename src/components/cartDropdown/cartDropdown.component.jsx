import Button from "../button/button.component";


// css
import './cartDropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go To Check Out</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
