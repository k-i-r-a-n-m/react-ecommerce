// import { createContext, useState, useEffect } from "react";

// import {addCollectionAndDocuments} from '../utils/firebase/firebase.utils'

// import SHOP_DATA from "../shopData.js";



// export const ProductsContext = createContext({
//   products: [],
//   setProducts: () => null,
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     addCollectionAndDocuments('categories', SHOP_DATA)
//     console.log(SHOP_DATA);
//    },[])

//   const value = { products, setProducts };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };


import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shopData.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    addCollectionAndDocuments('collections', SHOP_DATA);
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
