import useProducts from "../../hooks/useProducts";
import { CategoryCount } from "./Sidebar";

type PropTypes = {
  categories: CategoryCount[];
};

export default function ProductCategory({ categories }: PropTypes) {
  const { dispatch } = useProducts();

  const handleCategoryFilter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const categoryName = e.currentTarget.textContent; 
    if (categoryName) {
      // console.log(categoryName.trim().replace(/\s*\(\d+\)/, ""))
      dispatch({ type: "SET_CATEGORY_FILTER", payload: categoryName.trim().replace(/\s*\(\d+\)/, "") });
    }
  };

  return (
    <section className="sidebar-single-area product-categories-area">
      <h3 className="sidebar-single-area__title">Product categories</h3>
      <ul className="product-categories">
        {categories.map((category, index) => (
          <li className="cat-item" key={index}>
            <a href="#" onClick={handleCategoryFilter}>
              {category.name} <span className="amount">({category.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
