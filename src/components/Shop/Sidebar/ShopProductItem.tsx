import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProductType } from "../../context/ProductsProvider"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import useProducts from "../../hooks/useProducts"
import useCart from "../../hooks/useCart"
import useWishlist from "../../hooks/useWishlist"
import { getDownloadURL, getStorage, list, ref } from "@firebase/storage";
import { useEffect, useState } from "react"
import { Bag } from "react-bootstrap-icons"
import Rating from '@mui/material/Rating';
import { Loader } from "@mantine/core"
import { toast } from "react-toastify"


type PropTypes = {
  product: ProductType
}

interface ImageUrls {
  [productId: string]: string[]; // Define an index signature for image URLs
}

export default function ShopProductItem({ product }: PropTypes) {
  const { products } = useProducts()
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const { dispatch: wishlistDispatch, REDUCER_ACTIONS: WISHLIST_REDUCER_ACTION } = useWishlist()

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

  const onAddToCartClick = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } })
    toast.success(`${product.name} added to cart!`)
  }

  const onAddToWishlist = () => {
    wishlistDispatch({ type: WISHLIST_REDUCER_ACTION.ADD, payload: { ...product, quantity: 1 } })
    toast.success(`${product.name} added to wishlist!`)
  }
  return (
    <div className="col-xl-4 col-md-4 col-6 col-xxs-12">
      <div className="fz-1-single-product">
        <div className="fz-single-product__img">
          {imageUrls[product.id]?.[0] ? <img src={imageUrls[product.id]?.[0] || "#"} alt={product.name} /> : <Loader color="#B8860B" size="lg" type="dots" />}
          <div className="fz-single-product__actions">
            <button className="fz-add-to-wishlist-btn" onClick={onAddToWishlist}>
              <span className="btn-txt">add To wishlist</span>
              <span className="btn-icon"><FontAwesomeIcon icon={faHeart} /></span>
            </button>

            <button className="fz-add-to-cart-btn" onClick={onAddToCartClick}>
              <span className="btn-txt">add To cart</span>
              <span className="btn-icon"><Bag /></span>
            </button>

            
          </div>
        </div>

        <div className="fz-single-product__txt">
          <span className="fz-single-product__category list-view-text">{product.category}</span>
          <a href="shop-details.html" className="fz-single-product__title">{product.name }</a>
          <div className="fz-single-product__price-rating">
            <p className="fz-single-product__price">
              <span className="current-price">${product.price.toFixed(2)}</span>
            </p>

            <div className="rating list-view-text">
              <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly size="small" />
            </div>
          </div>

          <p className="fz-single-product__desc list-view-text">
            {product.description}
          </p>

          <div className="fz-single-product__actions list-view-text">
            <button className="fz-add-to-wishlist-btn" onClick={() => wishlistDispatch({ type: WISHLIST_REDUCER_ACTION.ADD, payload: { ...product, quantity: 1 } })}>
              <span className="btn-txt">add To wishlist</span>
              <span className="btn-icon">
                {/* <i className="fa-light fa-heart"></i> */}
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </button>

            <button className="fz-add-to-cart-btn" onClick={() => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } })}>
              <span className="btn-txt">add To cart</span>
              <span className="btn-icon"><Bag /></span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}