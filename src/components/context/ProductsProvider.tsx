import { createContext, useEffect, useReducer, ReactElement, useState } from "react";
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
  filteredProducts: ProductType[];
  dispatch: React.Dispatch<Action>;
  loading: boolean,
};

type State = {
  products: ProductType[];
  originalProducts: ProductType[];
  filteredProducts: ProductType[];
  minPrice: number;
  maxPrice: number;
  searchText: string;
};

type Action =
  | { type: "SET_PRODUCTS"; payload: ProductType[] }
  | { type: "SET_PRICE_RANGE"; payload: { minPrice: number; maxPrice: number } }
  | { type: "SET_SEARCH_TEXT"; payload: string };

const initialState: State = {
  products: initState,
  originalProducts: initState,
  filteredProducts: initState,
  minPrice: 240,
  maxPrice: 600,
  searchText: "",
};

const productsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload, originalProducts: action.payload, filteredProducts: action.payload };
    case "SET_PRICE_RANGE":
      return {
        ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice, filteredProducts: state.products.filter((product) => product.price >= action.payload.minPrice && product.price <= action.payload.maxPrice) };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

const ProductsContext = createContext<UseProductsContextType>({
  products: initState,
  filteredProducts: initState,
  dispatch: () => { },
  loading: true, // Initialize loading state as true
});

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const productsRef = collection(db, "Products");
        const snapshot = await getDocs(productsRef);
        const fetchedProducts: ProductType[] = snapshot.docs.map((doc) => {
          const productData = doc.data();
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
        dispatch({ type: "SET_PRODUCTS", payload: fetchedProducts });
        setLoading(false); // Set loading state to false when products are fetched
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchProducts();
  }, []);


  // const setPriceRange = (minPrice: number, maxPrice: number): void => {
  //   dispatch({ type: "SET_PRICE_RANGE", payload: { minPrice, maxPrice } });
  // };

  // const setSearchText = (text: string): void => {
  //   dispatch({ type: "SET_SEARCH_TEXT", payload: text });
  // };

  return (
    <ProductsContext.Provider
      value={{ products: state.originalProducts, filteredProducts: state.filteredProducts, dispatch, loading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
