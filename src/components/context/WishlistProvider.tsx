import { ReactElement, useMemo, useReducer, createContext } from "react";
import { CartItemType } from "./CartProvider";

type WishlistStateType = { wishlist: CartItemType[] }

const initWishlistState: WishlistStateType = { wishlist: JSON.parse(localStorage.getItem('wishlist')!) || [] }

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType,
}

const reducer = (state: WishlistStateType, action: ReducerAction): WishlistStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }

      const { name, price, id, category, description, rating, reviews, quantity } = action.payload

      const filteredWishlist: CartItemType[] = state.wishlist.filter(item => item.id != id)
      const updatedWishlist = [...filteredWishlist, { name, price, id, category, description, rating, reviews, quantity }]

      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
      return { ...state, wishlist: updatedWishlist }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing in REMOVE action')
      }

      const { id } = action.payload

      const filteredWishlist: CartItemType[] = state.wishlist.filter(item => item.id != id)

      localStorage.setItem('wishlist', JSON.stringify(filteredWishlist))

      return { ...state, wishlist: [...filteredWishlist] }

    }
    default:
      throw new Error('Undefined reducer action type')
  }
}

const useWishlistContext = (initWishlistState: WishlistStateType) => {
  const [state, dispatch] = useReducer(reducer, initWishlistState)

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const wishlist = state.wishlist
  const totalWishlistItem = wishlist.length

  return { dispatch, REDUCER_ACTIONS, wishlist, totalWishlistItem }
}

export type UseWishlistContextType = ReturnType<typeof useWishlistContext>

const initWishlistContextState: UseWishlistContextType = {
  dispatch: () => { },
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  wishlist: [],
  totalWishlistItem: 0
}

export const WishlistContext = createContext(initWishlistContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const WishlistProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <WishlistContext.Provider value={useWishlistContext(initWishlistState)}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContext
