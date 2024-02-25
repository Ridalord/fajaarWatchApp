import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getStorage, ref, getDownloadURL, list } from "firebase/storage";



interface ImageUrls {
  [productId: string]: string[]; // Define an index signature for image URLs
}

export default function ProductsSection() {
  const { products } = useProducts()
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const { dispatch: wishlistDispatch, REDUCER_ACTIONS: WISHLIST_REDUCER_ACTION, wishlist } = useWishlist()
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

  const fetchProductImageUrls = (productId: string) => {
    const storage = getStorage();
    const productRef = ref(storage, `Products/${productId}`);
    return list(productRef)
      .then((items) => {
        const imagePromises = items.items.map((item) => {
          return getDownloadURL(item);
        });
        return Promise.all(imagePromises);
      })
      .catch((error) => {
        console.error("Error fetching product image URLs:", error);
        return [];
      });
  };

  const [imageUrls, setImageUrls] = useState<ImageUrls>({}); 

  useEffect(() => {
    const fetchImages = async () => {
      const urls: ImageUrls = {};
      for (const product of products) {
        const urlsForProduct = await fetchProductImageUrls(product.id);
        urls[product.id] = urlsForProduct;
      }
      setImageUrls(urls);
    };
    fetchImages();
  }, [products]);

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
                  <div key={product.id} className="col-lg-3 col-md-4 col-6 col-xxs-12">
                    <div className="fz-7-product">
                      <div className="fz-7-product-img">
                        <img src={imageUrls[product.id]?.[0] || "#"} alt={product.name} />
                      </div>
                      <div className="fz-7-product-txt">
                        <h6 className="fz-7-product-cat">{product.category}</h6>
                        <h4 className="fz-7-product-title">
                          <a href="shop-details.html">{product.name}</a>
                        </h4>
                        <span className="fz-7-product-price">${product.price.toFixed(2)}</span>
                        <div className="fz-7-product-actions">
                          <button type="button" className="add-to-cart-btn" onClick={() => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } })}>Add To Cart</button>
                          <div className="right">
                            <button type="button" className="add-to-wishlist-btn" onClick={() => wishlistDispatch({ type: WISHLIST_REDUCER_ACTION.ADD, payload: {...product, quantity: 1}})}>
                              {/* <i className="fa-light fa-heart"></i> */}
                              <FontAwesomeIcon icon={faHeart}/>
                            </button>
                            <button type="button" className="fz-quick-view">
                              {/* <i className="fa-light fa-eye"></i> */}
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More Products Button */}
        <div className="text-center">
          <a href="shop.html" className="fz-6-sub-banner-btn fz-7-products-btn mt-30">More Products</a>
        </div>
      </div>
    </section>
  );
}