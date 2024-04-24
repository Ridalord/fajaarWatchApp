import { useState, ChangeEvent, FormEvent } from "react";
import { Search } from "react-bootstrap-icons";
import useProducts from "../../hooks/useProducts";

export default function ProductSearch() {
  const { dispatch } = useProducts();
  const [searchText, setSearchText] = useState("");

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "SET_SEARCH_TEXT", payload: searchText });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <section className="sidebar-single-area product-search-area">
      <h3 className="sidebar-single-area__title">Search Product</h3>
      <form role="search" className="fz-product-search-form" onSubmit={handleSearchProduct}>
        <input
          type="search"
          id="woocommerce-product-search-field-0"
          className="search-field"
          placeholder="Search products…"
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit" value="Search">
          <Search />
        </button>
      </form>
    </section>
  );
}
