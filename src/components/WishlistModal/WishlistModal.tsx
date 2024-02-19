import { ReactElement } from "react"
import useWishlist from "../hooks/useWishlist"
import WishlistModalItem from "./WishlistModalItem"
import { CartItemType } from "../context/CartProvider"
import { X } from "react-bootstrap-icons";


type PropTypes = {
  showWishlist: boolean,
  setShowWishlist: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function WishlistModal({showWishlist, setShowWishlist}: PropTypes) {
  const { wishlist } = useWishlist()
  const onCloseWishlist = () => {
    setShowWishlist(prev => !prev)
  }
  return (
    <div className={`overlay ${showWishlist? 'open': null}`}>
      <div className="cart-area cart-area-modal fz-wishlist-modal">
        <div className="cart__header">
          <h3 className="cart__title">Your Wishlist</h3>
          <button className="cart-area-modal-close-btn" onClick={onCloseWishlist}><X/></button>
        </div>

        <div className="cart__body">
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
            <a href="cart.html" className="fz-1-banner-btn update-cart-btn">Go to cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}