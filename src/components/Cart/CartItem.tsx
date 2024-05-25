import { Link } from "react-router-dom"
import { CartItemType } from "../context/CartProvider"
import { getDownloadURL, getStorage, list, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import { X } from "react-bootstrap-icons";
import useCurrency from "../hooks/useCurrency";

type PropTypes = {
  cartItem: CartItemType
}

interface ImageUrls {
  [productId: string]: string[];
}

export default function CartItem({ cartItem }: PropTypes) {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const{currency,rate} = useCurrency()
  const onAddQuantity = () => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...cartItem, quantity: cartItem.quantity + 1 }
    })
  }
  const onSubtractQuantity = () => {
    if (cartItem.quantity > 1) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...cartItem, quantity: cartItem.quantity - 1 }
      })
    }
  }
  const onRemoveProduct = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: { ...cartItem }
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

      const urlsForProduct = await fetchProductImageUrls(cartItem.id);
      urls[cartItem.id] = urlsForProduct;

      setImageUrls(urls);
    };
    fetchImages();
  }, [cartItem]);
  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={imageUrls[cartItem.id]?.[0] || "#"} alt={cartItem.name} />
          </div>
          <div className="cart-product__txt">
            <h6><Link to={`shop/${cartItem.id}`}>{cartItem.name}</Link></h6>
          </div>
        </div>
      </td>
      <td>{currency === 'USD' ? '$' : '₦'}{(cartItem.price * rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
      <td>
        <div className="cart-product__quantity">
          <div className="cart-product__quantity-btns">
            <button className="cart-product__minus" onClick={onSubtractQuantity}> - </button>
            <button className="cart-product__plus" onClick={onAddQuantity}> + </button>
          </div>
          <input type="number" name="product-quantity-input" className="cart-product-quantity-input" min="0" value={cartItem.quantity} readOnly />
        </div>
      </td>
      <td>{currency === 'USD' ? '$' : '₦'}{(cartItem.quantity * cartItem.price * rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
      <td>
        <button className="item-remove-btn" onClick={onRemoveProduct}>
          <X/>
        </button>
      </td>
    </tr>
  )
}