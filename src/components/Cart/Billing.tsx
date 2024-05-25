import useCart from "../hooks/useCart";
import useCurrency from "../hooks/useCurrency";

export default function Billing() {
  const { cart } = useCart();
  const {currency, rate} = useCurrency()

  // Calculate subtotal
  const subtotal = cart.reduce((previousPrice, cartItem) => {
    return previousPrice + cartItem.quantity * cartItem.price;
  }, 0);

  // Calculate total
  const total = (subtotal + 50)*rate; // Assuming shipping cost is $50

  return (
    <div className="cart-checkout-area">
      <h4 className="cart-checkout-area__title">Billing Summary</h4>

      <ul className="checkout-summary">
        <li>
          <span className="checkout-summary__key">Subtotal</span>
          <span className="checkout-summary__value">
            <span>{currency === 'USD' ? '$' : '₦'}</span>
            {(subtotal * rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </li>

        <li>
          <span className="checkout-summary__key">Shipping</span>
          <span className="checkout-summary__value">
            <span>{currency === 'USD' ? '$' : '₦'}</span>{(50.00 * rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </li>

        {/* Uncomment this section if you want to add coupon discount */}
        {/* <li>
          <span className="checkout-summary__key">Coupon discount</span>
          <span className="checkout-summary__value">-<span>$</span>60.00</span>
        </li> */}

        <li className="cart-checkout-total">
          <span className="checkout-summary__key">Total</span>
          <span className="checkout-summary__value">
            <span>{currency === 'USD' ? '$' : '₦'}</span>
            {total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </li>
      </ul>

      <a href="checkout.html" className="fz-1-banner-btn cart-checkout-btn">
        Proceed to checkout
      </a>
    </div>
  );
}
