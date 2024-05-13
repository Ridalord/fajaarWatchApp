import { useEffect, useState } from "react";
import { ProductType } from "../context/ProductsProvider"
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
import useProducts from "../hooks/useProducts";
import { Loader } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Bag } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useCurrency from "../hooks/useCurrency";



type PropTypes = {
  product: ProductType
}

interface ImageUrls {
  [productId: string]: string[];
}

export default function RelatedProduct({ product }: PropTypes) {
  const { products } = useProducts()
  const{currency, rate} = useCurrency()
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
    <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
      <div className="fz-1-single-product">
        <div className="fz-single-product__img">
          {imageUrls[product.id]?.[0] ? <img src={imageUrls[product.id]?.[0] || "#"} alt={product.name} /> : <Loader color="#B8860B" size="lg" type="dots" />}
          <div className="fz-single-product__actions">
            <button className="fz-add-to-wishlist-btn">
              <span className="btn-txt">add To wishlist</span>
              <span className="btn-icon"><FontAwesomeIcon icon={faHeart} /></span>
            </button>

            <button className="fz-add-to-cart-btn">
              <span className="btn-txt">add To cart</span>
              <span className="btn-icon"><Bag/></span>
            </button>

          </div>
        </div>

        <div className="fz-single-product__txt">
          <Link to={`/shop/${product.id}`} className="fz-single-product__title">{product.name}</Link>
          <div className="fz-single-product__price-rating">
            <p className="fz-single-product__price">
              <span className="current-price">{currency === 'USD' ? '$' : '₦'}{(product.price * rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}