import { X } from "react-bootstrap-icons";
import CartModalItem from "./CartModalItem";
import { CartItemType } from "../context/CartProvider";
import { ReactElement } from "react";
import useCart from "../hooks/useCart";

type PropTypes = {
  showCart: boolean,
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CartModal({showCart, setShowCart}: PropTypes) {
  const { cart } = useCart()
  const handleCloseCart = () => {
    setShowCart(prev => !prev)
  }
  return (
    <div className={`overlay ${showCart ? 'open': null}`}>
      <div className={`cart-area cart-area-modal fz-7-body ${showCart? 'open': null}`} id="cart-area-modal">
        <div className="cart__header">
          <h3 className="cart__title">Shopping cart</h3>
          <button className="cart-area-modal-close-btn" onClick={handleCloseCart}><X/></button>
        </div>
        <div className="cart__body">
          <table>

            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
                <th>remove</th>
              </tr>
            </thead>
            
            <tbody>
              {cart.length ? (
                cart.map((item: CartItemType): ReactElement => {
                  return <CartModalItem product={item} key={item.id} />;
                })
              ) : (
                <tr>
                  <td colSpan={5}>No Products in your cart</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="cart-left-actions d-flex justify-content-end">
            <a href="cart.html" className="fz-1-banner-btn update-cart-btn">View Full cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}