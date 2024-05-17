import { ReactElement } from "react"
import useWishlist from "../hooks/useWishlist"
import WishlistModalItem from "./WishlistModalItem"
import { CartItemType } from "../context/CartProvider"
import { X } from "react-bootstrap-icons";
// import Button from "../Button/Button";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";


type PropTypes = {
  showWishlist: boolean,
  setShowWishlist: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function WishlistModal({showWishlist, setShowWishlist}: PropTypes) {
  const { wishlist, dispatch: wishlistDispatch, REDUCER_ACTIONS: wishlistReducerActions } = useWishlist()
  const {dispatch, REDUCER_ACTIONS}= useCart()
  const onCloseWishlist = () => {
    setShowWishlist(prev => !prev)
  }
  const handleGoToCart = () => {
    wishlist.map((wishlistItem) => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...wishlistItem } }))
    wishlistDispatch({ type: wishlistReducerActions.TOCART })
    setShowWishlist(prev => !prev)
  }
  return (
    <div className={`overlay ${showWishlist ? 'open' : null}`}>
      <div className={`cart-area cart-area-modal fz-7-body fz-wishlist-modal ${showWishlist ? 'open' : null}`} data-aos="fade-down">
        <div className="cart__header">
          <h3 className="cart__title">Your Wishlist</h3>
          <button className="cart-area-modal-close-btn" onClick={onCloseWishlist}><X/></button>
        </div>

        <div className="cart__body table-responsive mobile-wishlist">
          <table>

            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>action</th>
                <th>remove</th>
              </tr>
            </thead>

            <tbody>
              {wishlist.length ? (
                wishlist.map((item: CartItemType): ReactElement => {
                  return <WishlistModalItem product={item} key={item.id} />;
                })
              ) : (
                <tr>
                  <td colSpan={4}>No Products on your wishlist</td>
                </tr>
              )}

            </tbody>
          </table>

          <div className="cart-left-actions d-flex justify-content-end">
            <Link to="/cart" onClick={handleGoToCart} className="fz-1-banner-btn update-cart-btn">Go to cart</Link>
            {/* <Button text="Go to cart" link="cart.html" type="cart"/> */}
          </div>
        </div>
      </div>
    </div>
  )
}