import { ReactElement } from "react"
import useCart from "../hooks/useCart"
import Billing from "./Billing"
import CartItem from "./CartItem"

export default function CartContent() {
  const {cart}= useCart()
  return (
    <div className="container">
      <div className="cart-section">
        <div className="cart-left inner-cart">
          <div className="cart-area">
            <div className="cart__body">
              <div className="table-responsive">
                <table>
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>price</th>
                      <th>quantity</th>
                      <th>total</th>
                      <th>remove</th>
                    </tr>

                    {cart.length ? (
                      cart.map((item): ReactElement => {
                        return <CartItem cartItem={item} key={item.id} />;
                      })
                    ) : (
                      <tr>
                        <td colSpan={5}>No Products in your cart</td>
                      </tr>
                    )}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Billing/>
      </div>
    </div>
  )
}