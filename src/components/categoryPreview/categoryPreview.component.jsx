import ProductCard from "../productCard/productCard.component";
import "./categoryPreview.styles.scss";



const CategoryPreview = ({ title, products }) => {
    console.log({title})
  return (
    <>
      <div className="category-preview-container">
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>

        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
