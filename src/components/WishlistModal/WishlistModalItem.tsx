import { CartItemType } from "../context/CartProvider"
import useCart from "../hooks/useCart"
import useWishlist from "../hooks/useWishlist"

type PropTypes = {
  product: CartItemType,
}

export default function WishlistModalItem({ product }: PropTypes) {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const {dispatch : wishlistDispatch, REDUCER_ACTIONS: WISHLIST_REDUCER_ACTION} = useWishlist()
  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product } })
  const removeFromWishlist = () => wishlistDispatch({ type: WISHLIST_REDUCER_ACTION.REMOVE, payload: {...product} })

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
          <button className="fz-add-to-cart-btn fz-1-banner-btn fz-wishlist-action-btn" onClick={onAddToCart}>Add to cart</button>
        </div>
      </td>
      <td>
        <button className="item-remove-btn" onClick={removeFromWishlist}>
          <i className="fa-light fa-xmark"></i>
        </button>
      </td>
    </tr>
  )
}