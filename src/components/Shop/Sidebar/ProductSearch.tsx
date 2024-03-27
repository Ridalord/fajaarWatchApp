import { Search } from "react-bootstrap-icons";



export default function ProductSearch() {
  return (
    <section className="sidebar-single-area product-search-area">
      <h3 className="sidebar-single-area__title">Search Product</h3>
      <form role="search" className="fz-product-search-form">
        <input type="search" id="woocommerce-product-search-field-0" className="search-field" placeholder="Search products…" />
        <button type="submit" value="Search"><Search/> </button>
      </form>
    </section>
  )
}