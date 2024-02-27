import { X } from "react-bootstrap-icons";
import useCart from "../hooks/useCart";
import { CartItemType } from "../context/CartProvider";
import { getStorage, ref, getDownloadURL, list } from "firebase/storage";
import { useEffect, useState } from "react";



type PropTypes = {
  product: CartItemType
}

interface ImageUrls {
  [productId: string]: string[]; 
}
export default function CartModalItem({product}:PropTypes) {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const onAddQuantity = () => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...product, quantity: product.quantity + 1 }
    })
  }
  const onSubtractQuantity = () => {
    if (product.quantity > 1) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...product, quantity: product.quantity - 1 }
      }) 
    }
  }

  const onRemoveProduct = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: {...product}
    })
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
      
      const urlsForProduct = await fetchProductImageUrls(product.id);
      urls[product.id] = urlsForProduct;
      
      setImageUrls(urls);
    };
    fetchImages();
  }, [product]);
  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={imageUrls[product.id]?.[0] || "#"} alt={product.name} />
          </div>
          <div className="cart-product__txt">
            <h6><a href="shop-details.html">{product.name}</a></h6>
          </div>
        </div>
      </td>
      <td>${product.price}</td>
      <td>
        <div className="cart-product__quantity">
          <div className="cart-product__quantity-btns">
            <button className="cart-product__minus" onClick={onSubtractQuantity}>-</button>
            <button className="cart-product__plus" onClick={onAddQuantity}> + </button>
          </div>
          <input type="number" name="product-quantity-input" className="cart-product-quantity-input" min="0" value={product.quantity} />
        </div>
      </td>
      <td>${product.quantity * product.price}</td>
      <td>
        <button className="item-remove-btn" onClick={onRemoveProduct}>
          <X />
        </button>
      </td>
    </tr>
  )
}