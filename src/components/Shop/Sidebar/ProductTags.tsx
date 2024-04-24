import useProducts from "../../hooks/useProducts";
import { CategoryCount } from "./Sidebar"

type PropTypes = {
  categories: CategoryCount[]
}

export default function ProductTags({ categories }: PropTypes) {
  const { dispatch } = useProducts();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); 
    event.currentTarget.classList.toggle("clicked"); 
    const categoryName = event.currentTarget.textContent;
    if (categoryName) {
      // console.log(categoryName.trim())
      dispatch({ type: "SET_CATEGORY_FILTER", payload: categoryName.trim()});
    }
  };

  return (
    <section className="sidebar-single-area product-tags-area">
      <h3 className="sidebar-single-area__title">Product tags</h3>
      <div className="tags">
        {categories.map((category, index) => (
          <a href="#" className="" key={index} onClick={handleClick}>{category.name}</a>
        ))}
      </div>
    </section>
  )
}
