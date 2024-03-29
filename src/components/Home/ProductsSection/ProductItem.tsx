import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";
import { ProductType } from "../../context/ProductsProvider";
import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { getDownloadURL, getStorage, list, ref } from "@firebase/storage";


type PropTypes = {
  product: ProductType,
  type: string,
}
interface ImageUrls {
  [productId: string]: string[]; // Define an index signature for image URLs
}
export default function ProductItem({ product, type }: PropTypes) {
  const { products } = useProducts()
  const { dispatch, REDUCER_ACTIONS} = useCart()
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

  return (
    <div className={type==="slider"? 'col-11':`col-lg-3 col-md-4 col-6 col-xxs-12`}>
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
              <button type="button" className="add-to-wishlist-btn" onClick={() => wishlistDispatch({ type: WISHLIST_REDUCER_ACTION.ADD, payload: { ...product, quantity: 1 } })}>
                {/* <i className="fa-light fa-heart"></i> */}
                <FontAwesomeIcon icon={faHeart} />
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
  )
}