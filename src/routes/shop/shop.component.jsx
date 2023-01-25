import { useContext } from "react";

// contexts
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/productCard/productCard.component";
// css
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
