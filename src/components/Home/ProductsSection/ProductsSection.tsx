import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";





export default function ProductsSection() {
  const { products } = useProducts()
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const [activeTab, setActiveTab] = useState<string>('newest');
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);
  const filteredProducts = () => {
    switch (activeTab) {
      case 'newest':
        return products.slice(-8); // Show all products
      case 'best-seller':
        return products.filter(product => (product.price <= 300)).slice(0, 8);
      case 'on-sale':
        return products.filter(product => product.category === "Smart Watches").slice(0, 8);
      default:
        return products;
    }
  }

  return (
    <section className="fz-7-new-arrivals py-120 fz-7-body" data-aos="fade-up">
      <div className="container">
        <div className="fz-7-section-heading">
          <h2 className="fz-7-section-title">New Arrivals</h2>
          <p className="fz-7-section-descr">Explore our latest collection of trendy and innovative products.</p>
        </div>
        {/* Tab navigation */}
        <nav>
          <div className="nav nav-tabs" id="fz-7-new-arrival-nav-tab" role="tablist">
            <button
              className={`nav-link ${activeTab === 'newest' ? 'active' : ''}`}
              onClick={() => setActiveTab('newest')}
            >
              Newest
            </button>
            <button
              className={`nav-link ${activeTab === 'best-seller' ? 'active' : ''}`}
              onClick={() => setActiveTab('best-seller')}
            >
              Best Seller
            </button>
            <button
              className={`nav-link ${activeTab === 'on-sale' ? 'active' : ''}`}
              onClick={() => setActiveTab('on-sale')}
            >
              On Sale
            </button>
          </div>
        </nav>

        {/* Tab content */}
        <div className="tab-content" id="fz-7-new-arrival-nav-tabContent">
          {['newest', 'best-seller', 'on-sale'].map(tabId => (
            <div
              key={tabId}
              className={`tab-pane fade ${activeTab === tabId ? 'show active' : ''}`}
              id={`nav-${tabId}`}
              role="tabpanel"
              aria-labelledby={`nav-${tabId}-tab`}
            >
              <div className="row fz-6-products-row">
                {filteredProducts().map(product => (
                  <ProductItem product={product} key={product.id} type="null"/>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop" className="fz-6-sub-banner-btn fz-7-products-btn mt-30">More Products</Link>
        </div>
      </div>
    </section>
  );
}