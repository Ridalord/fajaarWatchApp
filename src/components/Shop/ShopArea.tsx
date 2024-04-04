import useProducts from "../hooks/useProducts"
import ShopProductItem from "./Sidebar/ShopProductItem"
import Sidebar from "./Sidebar/Sidebar"

export default function ShopArea() {
  const {products} = useProducts()
  return (
    <div className="shop-area">
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <Sidebar/>

          <div className="col-xl-9 col-lg-8 order-0 order-lg-1">
            <div className="product-view-actions">
              <div className="row gy-3 align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-5 col-6 col-xxs-12 text-center text-md-start">
                  <p className="text-center text-sm-start">Showing 1-16 OF 25 results</p>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-7 col-6 col-xxs-12 col-sm-6">
                  <div className="product-view-right-actions text-center text-md-end d-flex justify-content-center justify-content-md-end">
                    <div className="view-type">
                      <button className="grid-view active">
                        <i className="fa-sharp fa-solid fa-grid-2"></i>
                      </button>

                      <button className="list-view">
                        <i className="fa-light fa-list"></i>
                      </button>
                    </div>

                    <div className="product-sorting d-inline-block">
                      <form className="" action="#">
                        <div className="nice-select" tabIndex={0}><span className="current">Default sorting</span>
                          <ul className="list">
                            <li data-value="menu_order" className="option selected">Default sorting</li>
                            <li data-value="popularity" className="option">Sort by popularity</li>
                            <li data-value="rating" className="option">Sort by average rating</li>
                            <li data-value="date" className="option">Sort by latest</li>
                            <li data-value="price" className="option">Sort by price: low to high</li>
                            <li data-value="price-desc" className="option">Sort by price: high to low</li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fz-inner-products-container">
              <div className="row">
                {products.map((product) => <ShopProductItem product={product} key={product.id} />)}
              </div>
            </div>

            <nav className="fz-shop-pagination">
              <ul className="page-numbers">
                <li>
                  <a href="#" className="page-number-btn current"><span aria-current="page" className="page-number current">01</span></a>
                </li>
                <li>
                  <a href="#" className="page-number-btn"><span aria-current="page" className="page-number">02</span></a>
                </li>
                <li>
                  <a href="#" className="page-number-btn"><span aria-current="page" className="last-page"><i className="fa-light fa-angle-double-right"> </i></span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}