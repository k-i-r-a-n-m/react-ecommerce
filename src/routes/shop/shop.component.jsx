import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/categoriesPreview.component";
import Category from "../category/category.component";

// css
import "./shop.styles.scss";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />

      </Routes>
    </>
  );
};

export default Shop;
