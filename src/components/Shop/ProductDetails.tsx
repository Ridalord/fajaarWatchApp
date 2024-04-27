import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { ProductType } from "../context/ProductsProvider";
import Card from "../Footer/card.png"
import { Rating } from "@mui/material";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";
import { toast } from "react-toastify";
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
import { Loader } from "@mantine/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductreviewCard from "./ProductReviewCard";
import RelatedProduct from "./RelatedProduct";




interface ImageUrls {
  [productId: string]: string[]; 
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [cartCount, setCartCount] = useState<number>(1)
  const { cart, dispatch, REDUCER_ACTIONS } = useCart()
  const { dispatch: WishlistDispatch, REDUCER_ACTIONS: WishlistReducerActions, wishlist } = useWishlist()
  const [activeTab, setActiveTab] = useState<string>("descr-tab-pane");
  const [relatedProducts, setRelatedProducts] = useState<ProductType[] | null>([])

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

  useEffect(() => {
    if (id && products) {
      const foundProduct = products.find((product) => product.id === id);
      setProduct(foundProduct || null);
    }
  }, [id, products, cart, cartCount]);

  useEffect(() => {
    if (id && cart) {
      const cartProduct = cart.find((product) => product.id === id);
      if (cartProduct) {
        setCartCount(cartProduct.quantity);
      }
    }
  }, [id, cart]);

  useEffect(() => {
    if (product) {
      const relatedProductsArray: ProductType[] = products.filter((productItem) => productItem.category === product.category);
      if (relatedProductsArray.length > 0) {
        setRelatedProducts(relatedProductsArray);
      }
    }
  }, [product, products]);


  const handleAddCount = () => {
    setCartCount(prev=>prev+1)
  }
  const handleSubtractCount = () => {
    if (cartCount > 1) {
      setCartCount(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (id && cart) {
      const cartProduct = cart.find((product) => product.id === id) || products.find((product) => product.id === id);
      if (cartProduct) {
        dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...cartProduct, quantity: cartCount } });
        toast.success(`${cartProduct.name} added to cart!`)
      }
    }
  };

  const handleAddToWishlist = () => {
    if (id && wishlist) {
      const wishlistProduct = wishlist.find((product) => product.id === id) || products.find((product) => product.id === id);
      if (wishlistProduct) {
        WishlistDispatch({ type: WishlistReducerActions.ADD, payload: { ...wishlistProduct, quantity: 1 } })
        toast.success(`${wishlistProduct.name} added to wishlist!`)
      }
    }
  }

  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  // console.log(relatedProducts)

  return (
    <div>
      {product ? (
        <>
          <Breadcrumbs page="product" productName={product.name} />
          <section className="fz-product-details">
            <div className="container">
              <div className="row align-items-start justify-content-center">
                <div className="col-lg-5 col-md-6 col-12 col-xxs-12">
                  <Carousel interval={5000} transitionTime={500} showArrows={false} showIndicators={false} showStatus={false} emulateTouch={true}  className="fz-product-details__img">
                    {imageUrls[product.id]?.[0] ? <img src={imageUrls[product.id]?.[0] || "#"} alt={product.name} /> : <Loader color="#B8860B" size="lg" type="dots" />}
                    {imageUrls[product.id]?.[1] ? <img src={imageUrls[product.id]?.[1] || "#"} alt={product.name} /> : <Loader color="#B8860B" size="lg" type="dots" />}
                    {imageUrls[product.id]?.[2] ? <img src={imageUrls[product.id]?.[2] || "#"} alt={product.name} /> : <Loader color="#B8860B" size="lg" type="dots" />}
                    {imageUrls[product.id]?.[3] ? <img src={imageUrls[product.id]?.[3] || "#"} alt={product.name} /> : <Loader color="#B8860B" size="lg" type="dots" />}
                  </Carousel>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="fz-product-details__txt">
                    <h2 className="fz-product-details__title">{product.name}</h2>
                    <div className="fz-product-details__price-rating">
                      <span className="price">${product.price}</span>
                      <div className="rating">
                        <Rating name="half-rating-read" defaultValue={Number(product.rating)} precision={0.1} readOnly size="medium" />
                      </div>
                    </div>

                    <div className="fz-product-details__infos">
                      <ul>
                        {/* <li><span className="info-property"> SKU </span> : <span className="info-value">D890f</span></li> */}
                        <li><span className="info-property"> Category </span> : <span className="info-value">{product.category}</span></li>
                        <li><span className="info-property"> Availablity </span> : <span className="info-value">in Stock</span></li>
                      </ul>
                    </div>

                    <p className="fz-product-details__short-descr">
                      {product.description}
                    </p>

                    <div className="fz-product-details__actions">
                      <div className="fz-product-details__quantity cart-product__quantity">
                        <button className="minus-btn cart-product__minus" onClick={handleSubtractCount}>-</button>
                        <input readOnly type="number" name="product-quantity" id="product-quantity-input" className="cart-product-quantity-input" value={cartCount} />
                        <button className="plus-btn cart-product__plus" onClick={handleAddCount}>+</button>
                      </div>

                      <button className="fz-product-details__add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                      <button className="fz-product-details__add-to-wishlist" onClick={handleAddToWishlist}><FontAwesomeIcon icon={faHeart}/></button>
                    </div>

                    <div className="fz-product-details__payment-methods">
                      <img src={Card} alt="Pyament Methods"/>
                        <span className="dialog">Guaranteed safe & secure checkout</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="fz-product-details__additional-info">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === "descr-tab-pane" ? "active" : ""}`} id="descr-tab" onClick={() => toggleTab("descr-tab-pane")}>Description</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === "review-tab-pane" ? "active" : ""}`} id="review-tab" onClick={() => toggleTab("review-tab-pane")}>Reviews</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className={`tab-pane fade ${activeTab === "descr-tab-pane" ? "show active" : ""}`} id="descr-tab-pane" role="tabpanel" aria-labelledby="descr-tab">
                        <div className="fz-product-details__descr">
                          <p>{ product.description}</p>
                        </div>
                      </div>


                      <div className={`tab-pane fade ${activeTab === "review-tab-pane" ? "show active" : ""}`} id="review-tab-pane" role="tabpanel" aria-labelledby="review-tab">
                        <div className="fz-product-details__review">
                          <div className="user-reviews">
                            <h4 className="reviews-title">Reviews of this product</h4>
                            <div className="row g-4">
                              {product.reviews.map((review)=> <ProductreviewCard review={review} key={review.id}/>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          <section className="related-product-section">
            <div className="container">
              <h2 className="related-product__title">Related Products</h2>
              <div className="row gy-sm-4 g-3">
                {relatedProducts?.sort(() => Math.random() - 0.5).slice(0, 4).map((product) => (
                  <RelatedProduct product={product} key={product.id} />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
