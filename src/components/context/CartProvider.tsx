import { ReactElement, useMemo, useReducer, createContext } from "react"
import { ReviewType } from "./ProductsProvider"

export type CartItemType = {
  id: string,
  name: string,
  description: string,
  price: number,
  reviews: ReviewType[],
  quantity: number,
  rating: number,
  category: string,
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTON_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTON_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTON_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }
      const { id, name, price, description, category, rating, reviews } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id != id)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id)

      const quantity: number = itemExists ? itemExists.quantity + 1 : 1

      return { ...state, cart: [...filteredCart, { id, name, price, quantity, category, description, rating, reviews }] }
    }
    case REDUCER_ACTON_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing in REMOVE action')
      }

      const { id } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id != id)

      return { ...state, cart: [...filteredCart] }
    }
    case REDUCER_ACTON_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload missing in QUANTITY action')
      }

      const { id, quantity } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id != id)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id)

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity')
      }

      const updatedItem: CartItemType = { ...itemExists, quantity }

      return { ...state, cart: [...filteredCart, updatedItem] }
    }
    case REDUCER_ACTON_TYPE.SUBMIT: {
      return { ...state, cart: [] }
    }
    default:
      throw new Error('Undefined reducer action type')
  }
}


const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState)

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTON_TYPE
  }, [])

  const totalCartItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0)

  const totalPrice = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + (cartItem.quantity * cartItem.price)
    }, 0)
  )

  const cart = state.cart

  return { dispatch, REDUCER_ACTIONS, totalCartItems, totalPrice, cart }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => { },
  REDUCER_ACTIONS: REDUCER_ACTON_TYPE,
  totalCartItems: 0,
  totalPrice: '',
  cart: []
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
