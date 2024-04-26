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




interface ImageUrls {
  [productId: string]: string[]; 
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [cartCount, setCartCount] = useState<number>(1)
  const { cart, dispatch, REDUCER_ACTIONS } = useCart()
  const {dispatch : WishlistDispatch, REDUCER_ACTIONS: WishlistReducerActions, wishlist} = useWishlist()
  

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
                                      <button className="nav-link active" id="descr-tab" data-bs-toggle="tab" data-bs-target="#descr-tab-pane" type="button" role="tab" aria-controls="descr-tab-pane" aria-selected="true">Description</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review-tab-pane" type="button" role="tab" aria-controls="review-tab-pane" aria-selected="false">Reviews</button>
                                    </li>
                                  </ul>
                                  <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="descr-tab-pane" role="tabpanel" aria-labelledby="descr-tab" tabIndex={0}>
                                      <div className="fz-product-details__descr">
                                        <p>Each controller comes with adjustable in-built dual shock mechanism. They can be toggled on/off and shock setting of 1,2 and 3 Auxiliary
                                          buttons around the home button enable more key bindings to be designated. Designed as PS3 Controllers Can be used in all PC to enough
                                          time to play Condition 8.5/10 Only a small rust on one of the USB heads. A very minor crack at the bottom of the Red Controller
                                        </p>

                                        <ul>
                                          <li>Designed as PS3 Controllers Can be used in all PC</li>
                                          <li>A very minor crack at the bottom of the Red Controller</li>
                                          <li>Opt enough time to play Condition 8.5/10 Only a small rust on one of the USB heads.</li>
                                        </ul>
                                      </div>
                                    </div>


                                    <div className="tab-pane fade" id="review-tab-pane" role="tabpanel" aria-labelledby="review-tab" tabIndex={0}>
                                      <div className="fz-product-details__review">
                                        <div className="review-overview">
                                          <div className="average-rating-area">
                                            <h3><span>4.3</span><span>/5</span></h3>
                                            <span className="rating-amount">24 ratings</span>
                                          </div>

                                          <div className="review-breakdown">
                                            <ul className="individual-star-breakdown">
                                              <li className="star">
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                              </li>
                                              <li>
                                                <div className="bar">
                                                  <div className="filled"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="each-star-amount">320</div>
                                              </li>
                                            </ul>

                                            <ul className="individual-star-breakdown individual-star-breakdown-2">
                                              <li className="star">
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                              </li>
                                              <li>
                                                <div className="bar">
                                                  <div className="filled"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="each-star-amount">250</div>
                                              </li>
                                            </ul>

                                            <ul className="individual-star-breakdown individual-star-breakdown-3">
                                              <li className="star">
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                              </li>
                                              <li>
                                                <div className="bar">
                                                  <div className="filled"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="each-star-amount">140</div>
                                              </li>
                                            </ul>

                                            <ul className="individual-star-breakdown individual-star-breakdown-4">
                                              <li className="star">
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                              </li>
                                              <li>
                                                <div className="bar">
                                                  <div className="filled"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="each-star-amount">83</div>
                                              </li>
                                            </ul>

                                            <ul className="individual-star-breakdown individual-star-breakdown-5">
                                              <li className="star">
                                                <i className="fa-solid fa-sharp fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                                <i className="fa-light fa-star"></i>
                                              </li>
                                              <li>
                                                <div className="bar">
                                                  <div className="filled"></div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="each-star-amount">11</div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>


                                        <div className="user-reviews">
                                          <h4 className="reviews-title">Reviews of this product</h4>
                                          <div className="row g-4">
                                            <div className="col-xl-6">
                                              <div className="single-review">
                                                <div className="user">
                                                  <div className="user-img">
                                                    <img src="assets/images/user-1.png" alt="user"/>
                                                  </div>
                                                  <div className="user-info">
                                                    <h6 className="user-name">Eliza nolan</h6>
                                                    <div className="user-rating">
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-light fa-sharp fa-star"></i>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="review">
                                                  <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id. Maxime consequatur recusandae fugiat accusamus ipsam reiciendis, officiis esse assumenda voluptas aspernatur consequuntur? Eaque sed quibusdam ipsum saepe nulla!
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-6">
                                              <div className="single-review">
                                                <div className="user">
                                                  <div className="user-img">
                                                    <img src="assets/images/user-2.png" alt="user"/>
                                                  </div>
                                                  <div className="user-info">
                                                    <h6 className="user-name">Abu Amer</h6>
                                                    <div className="user-rating">
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-light fa-sharp fa-star"></i>
                                                      <i className="fa-light fa-sharp fa-star"></i>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="review">
                                                  <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id. Maxime consequatur recusandae fugiat accusamus ipsam reiciendis, officiis esse assumenda voluptas aspernatur consequuntur? Eaque sed quibusdam ipsum saepe nulla!
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-6">
                                              <div className="single-review">
                                                <div className="user">
                                                  <div className="user-img">
                                                    <img src="assets/images/user-3.png" alt="user"/>
                                                  </div>
                                                  <div className="user-info">
                                                    <h6 className="user-name">Brunt glenn</h6>
                                                    <div className="user-rating">
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="review">
                                                  <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id. Maxime consequatur recusandae fugiat accusamus ipsam reiciendis, officiis esse assumenda voluptas aspernatur consequuntur? Eaque sed quibusdam ipsum saepe nulla!
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-6">
                                              <div className="single-review">
                                                <div className="user">
                                                  <div className="user-img">
                                                    <img src="assets/images/user-4.png" alt="user"/>
                                                  </div>
                                                  <div className="user-info">
                                                    <h6 className="user-name">chad hossain</h6>
                                                    <div className="user-rating">
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-solid fa-sharp fa-star"></i>
                                                      <i className="fa-light fa-sharp fa-star"></i>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="review">
                                                  <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id. Maxime consequatur recusandae fugiat accusamus ipsam reiciendis, officiis esse assumenda voluptas aspernatur consequuntur? Eaque sed quibusdam ipsum saepe nulla!
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
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
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
