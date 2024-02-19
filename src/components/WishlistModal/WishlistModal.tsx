import { ReactElement } from "react"
import useWishlist from "../hooks/useWishlist"
import WishlistModalItem from "./WishlistModalItem"
import { CartItemType } from "../context/CartProvider"

export default function WishlistModal() {
  const { wishlist } = useWishlist()
  return (
    <div className="cart-area cart-area-modal fz-wishlist-modal">
      <div className="cart__header">
        <h3 className="cart__title">Your Wishlist</h3>
        <button className="cart-area-modal-close-btn"><i className="fa-regular fa-xmark"></i></button>
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
  )
}