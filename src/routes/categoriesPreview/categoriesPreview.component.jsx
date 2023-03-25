import { useContext } from "react";

// contexts
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/categoryPreview/categoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;

//! before cardPreview displaying all items in a category
// {
//   Object.keys(categoriesMap).map((title) => (
//     <Fragment key={title}>
//       <h2>{title}</h2>
//       <div className="products-container">
//         {categoriesMap[title].map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </Fragment>
//   ));
// }
