import { CategoryCount } from "./Sidebar";


type PropTypes = {
  categories: CategoryCount[]
}

export default function ProductCategory({categories}:PropTypes) {
  
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
