import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useCurrency from "../hooks/useCurrency";
import {
  CompleteResponesProps,
  MonnifyProps,
  usePayWithMonnifyPayment,
  UserCancelledResponseProps,
} from 'react-monnify-ts';

export default function Billing() {
  const { cart, dispatch, REDUCER_ACTIONS } = useCart();
  const { currentUser } = useAuth();
  const { currency, rate } = useCurrency();

  // Calculate subtotal
  const subtotal = cart.reduce((previousPrice, cartItem) => {
    return previousPrice + cartItem.quantity * cartItem.price;
  }, 0);

  // Calculate total
  const total = (subtotal + 50) * rate; // Assuming shipping cost is $50

  // Ensure all required environment variables are present
  const apiKey = import.meta.env.VITE_MONNIFY_API;
  const contractCode = import.meta.env.VITE_CONTRACT_CODE;

  if (!apiKey || !contractCode) {
    console.error("API key and Contract Code are required for Monnify");
    return null;
  }

  const config: MonnifyProps = {
    amount: Number(total.toFixed(2)),
    currency: `${currency}`,
    reference: `${String(new Date().getTime())}`,
    customerName: `${currentUser.lastName} ${currentUser.firstName}`,
    customerEmail: `${currentUser.email}`,
    apiKey: apiKey,
    contractCode: contractCode,
    paymentDescription: 'Product Checkout',
    metadata: {
      name: `${currentUser.firstName}`,
    },
    isTestMode: true,
    customerPhoneNumber: `${currentUser.phoneNumber || '08132246772'}`,
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const initializePayment = usePayWithMonnifyPayment(config);

  const onLoadStart = () => {
    console.log('loading has started')
  }
  const onLoadComplete = () => {
    console.log('SDK is UP')
  }

  function onClose (data: UserCancelledResponseProps) {
    //Implement what should happen when the modal is closed here
    console.log('data', data)
  }

  function onComplete (response: CompleteResponesProps) {
    // Implement what happens when the transaction is completed.
    console.log('response', response);
    if (response) {
      if (response.status === 'SUCCESS') {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
      } else {
        console.error('Payment failed:', response);
      }
    } else {
      console.error('Payment response is undefined');
    }
  }

  const onClickCheckout = () => {
    console.log('Config:', config);
    try {
      initializePayment(onComplete, onClose, onLoadComplete, onLoadStart);
    } catch (error) {
      console.error('Error initializing payment', error);
    }
  };

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
            <span>{currency === 'USD' ? '$' : '₦'}</span>
            {(50.00 * rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </li>

        <li className="cart-checkout-total">
          <span className="checkout-summary__key">Total</span>
          <span className="checkout-summary__value">
            <span>{currency === 'USD' ? '$' : '₦'}</span>
            {total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </li>
      </ul>

      <button onClick={onClickCheckout} className="fz-1-banner-btn cart-checkout-btn">
        Proceed to checkout
      </button>
    </div>
  );
}
