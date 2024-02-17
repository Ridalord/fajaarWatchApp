import { createContext, useEffect, useState, ReactElement } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "@firebase/firestore";

export type ReviewType = {
  id: string;
  name: string;
  rating: number;
  remark: string;
};

export type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  category: string;
  reviews: ReviewType[];
};

const initState: ProductType[] = [];

export type UseProductsContextType = {
  products: ProductType[];
};

const initContextState: UseProductsContextType = { products: initState };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const productsRef = collection(db, "Products");
        const snapshot = await getDocs(productsRef);
        const fetchedProducts: ProductType[] = snapshot.docs.map((doc) => {
          const productData = doc.data();
          // Make sure each product document contains all required properties
          return {
            id: doc.id,
            name: productData.name || "",
            price: productData.price || 0,
            description: productData.description || "",
            rating: productData.rating || 0,
            category: productData.category || "",
            reviews: productData.reviews || [],
          };
        });
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
