import { X } from "react-bootstrap-icons";
import useCart from "../hooks/useCart";
import { CartItemType } from "../context/CartProvider";
import Ticwatch from "./ticwatch.jpeg"


type PropTypes = {
  product: CartItemType
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
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...product, quantity: product.quantity - 1 }
    })
  }

  const onRemoveProduct = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: {...product}
    })
  }
  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={Ticwatch} alt={product.name} />
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