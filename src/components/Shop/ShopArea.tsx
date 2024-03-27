import Sidebar from "./Sidebar/Sidebar"

export default function ShopArea() {
  return (
    <div className="shop-area">
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <Sidebar/>

          <div className="col-xl-9 col-lg-8 order-0 order-lg-1">
            {/* <div className="product-view-actions">
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
                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-pro-2.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-pro-3.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-pro-4.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-cat-5.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-cat-4.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-cat-4.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-cat-3.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-cat-2.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
                  <div className="fz-1-single-product">
                    <div className="fz-single-product__img">
                      <img src="assets/images/fz-3-cat-1.png" alt="Product Image"/>
                        <div className="fz-single-product__actions">
                          <button className="fz-add-to-wishlist-btn">
                            <span className="btn-txt">add To wishlist</span>
                            <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                          </button>

                          <button className="fz-add-to-cart-btn">
                            <span className="btn-txt">add To cart</span>
                            <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                          </button>

                          <button className="fz-add-to-compare-btn">
                            <span className="btn-txt">select to compare</span>
                            <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                          </button>
                        </div>
                    </div>

                    <div className="fz-single-product__txt">
                      <span className="fz-single-product__category list-view-text">Wooden Door</span>
                      <a href="shop-details.html" className="fz-single-product__title">Modern Fir Door</a>
                      <div className="fz-single-product__price-rating">
                        <p className="fz-single-product__price">
                          <span className="current-price">$740.00</span>
                        </p>

                        <div className="rating list-view-text">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-light fa-star"></i>
                        </div>
                      </div>

                      <p className="fz-single-product__desc list-view-text">
                        2021 Latest G5 3200DPI Gaming Mouse 7-Color RGB Breathing
                        Led Light for Notebook Laptop/PC RGB Backlit Universal.
                      </p>

                      <div className="fz-single-product__actions list-view-text">
                        <button className="fz-add-to-wishlist-btn">
                          <span className="btn-txt">add To wishlist</span>
                          <span className="btn-icon"><i className="fa-light fa-heart"></i></span>
                        </button>

                        <button className="fz-add-to-cart-btn">
                          <span className="btn-txt">add To cart</span>
                          <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                        </button>

                        <button className="fz-add-to-compare-btn">
                          <span className="btn-txt">select to compare</span>
                          <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
            </nav> */}
          </div>
        </div>
      </div>
    </div>
  )
}