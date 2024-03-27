import useProducts from "../../hooks/useProducts";
import { useState, useEffect } from "react";


type CategoryCount = {
  name: string;
  count: number;
};

export default function ProductCategory() {
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
    <section className="sidebar-single-area product-categories-area">
      <h3 className="sidebar-single-area__title">Product categories</h3>
      <ul className="product-categories">
        {categories.map((category, index) => (
          <li className="cat-item" key={index}>
            <a href="#">{category.name} <span className="amount">({category.count})</span></a>
          </li>
        ))}
      </ul>
    </section>
  );
}
