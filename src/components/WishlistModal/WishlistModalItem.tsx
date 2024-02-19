import { ProductType } from "../context/ProductsProvider"
import useCart from "../hooks/useCart"

type PropTypes = {
  product: ProductType
}

export default function WishlistModalItem({ product }: PropTypes) {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product} })

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src="assets/images/fz-3-pro-1.png" alt="Product Image" />
          </div>
          <div className="cart-product__txt">
            <h6><a href="shop-details.html">{product.name}</a></h6>
          </div>
        </div>
      </td>
      <td>${product.price.toFixed(2)}</td>
      <td>
        <div className="fz-wishlist-action">
          <button className="fz-add-to-cart-btn fz-1-banner-btn fz-wishlist-action-btn" onClick={}>Add to cart</button>
        </div>
      </td>
      <td>$55.00</td>
      <td>
        <button className="item-remove-btn">
          <i className="fa-light fa-xmark"></i>
        </button>
      </td>
    </tr>
  )
}