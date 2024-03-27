// import PriceFilter from "./PriceFilter";
import ProductCategory from "./ProductCategories";
import ProductSearch from "./ProductSearch";

export default function Sidebar() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-9 col-xxs-12 order-1 order-lg-0">
      <div className="fz-sidebar">
        <ProductSearch/>

        <ProductCategory/>

        {/* <PriceFilter/> */}

        <section className="sidebar-single-area product-tags-area">
          <h3 className="sidebar-single-area__title">Product tags</h3>
          <div className="tags">
            <a href="#" className="">Backpacks</a>
            <a href="#" className="">Cloths</a>
            <a href="#" className="">Fashion</a>
            <a href="#" className="">Pads</a>
            <a href="#" className="">Shoes</a>
            <a href="#" className="">Tshirt</a>
            <a href="#" className="">Watch</a>
          </div>
        </section>
      </div>
    </div>
  )
}