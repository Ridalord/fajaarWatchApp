import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import PriceFilter from "./PriceFilter";
import ProductCategory from "./ProductCategories";
import ProductSearch from "./ProductSearch";
import ProductTags from "./ProductTags";


export type CategoryCount = {
  name: string;
  count: number;
};
export default function Sidebar() {
  const { products } = useProducts();
  const [categories, setCategories] = useState<CategoryCount[]>([]); // Specify the type of state

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      const categoryCounts: CategoryCount[] = uniqueCategories.map(category => {
        return {
          name: category,
          count: products.reduce((total, product) => (product.category === category ? total + 1 : total), 0)
        };
      });
      setCategories(categoryCounts);
    }
  }, [products]);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-9 col-xxs-12 order-1 order-lg-0">
      <div className="fz-sidebar">
        <ProductSearch/>

        <ProductCategory categories={categories}/>

        <PriceFilter/>

        <ProductTags categories={categories}/>
      </div>
    </div>
  )
}