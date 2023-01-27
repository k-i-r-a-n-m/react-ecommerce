import { useContext } from "react";

// components
import Button from "../button/button.component";

// contexts
import { CartDropdownContext } from "../../contexts/cardDropdown.contex";

// css
import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
 

  const { addItemToCart } = useContext(CartDropdownContext);

  const cartHandler = (event) => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={cartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
