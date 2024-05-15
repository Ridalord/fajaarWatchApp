import { doc, getDoc, setDoc } from "firebase/firestore";
import { CartItemType } from "./CartProvider"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { ReactElement, createContext, useEffect, useMemo, useReducer } from "react";


export type UserType = {
  id: string
  firstName: string,
  lastName: string,
  email: string,
  address?: string,
  phoneNumber?: string,
  cart?: CartItemType[],
  wishlist?: CartItemType[],
}

export type AuthStateType = {
  currentUser: UserType,
  isLoggedIn: boolean,
}

const initAuthContext: AuthStateType = {
  currentUser: {
    id: '',
    firstName: '',
    address: '',
    cart: JSON.parse(localStorage.getItem("cart")!) || [],
    email: '',
    lastName: '',
    phoneNumber: '',
    wishlist: JSON.parse(localStorage.getItem("wishlist")!) || []
  },
  isLoggedIn: false,
}

const REDUCER_ACTION_TYPE = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  LOGOUT: "LOGOUT",
  LOAD_USER: "LOAD_USER",
  UPDATE_USER: "UPDATE_USER"
}

export type SignupCredType = {
  email: string,
  firstName?: string,
  lastName?: string,
  password: string,
}

export type UpdateUserPayload = {
  id: string;
  updatedUserData: Partial<UserType>; 
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string,
  payload?: SignupCredType | UpdateUserPayload,
}

const reducer = (state: AuthStateType, action: ReducerAction ): AuthStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SIGNUP: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }
      const { email, password, firstName, lastName } = action.payload as SignupCredType
      let loggedIn: boolean = false
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // console.log(userCredential.user);
          setDoc(doc(db, "Users", userCredential.user.uid), {
            id: userCredential.user.uid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: "",
            phoneNumber: "",
            cart: JSON.parse(localStorage.getItem("cart")!) || [],
            wishlist: JSON.parse(localStorage.getItem("wishlist")!) || []
          })
          console.log("User data updated")
          loggedIn = true
        })
        .catch((error) => {
          throw new Error(error.message);
        });
      console.log(loggedIn)
      return {...state, isLoggedIn: loggedIn, currentUser: {...state.currentUser, firstName: firstName!, lastName: lastName!, email: email!, } }
    }
    case REDUCER_ACTION_TYPE.LOGIN: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }
      const { email, password } = action.payload as SignupCredType
      let loggedIn: boolean = false
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          loggedIn = true
        }).catch((error) => {
          throw new Error(error)
        })
      return{...state, isLoggedIn: loggedIn}
    }
    case REDUCER_ACTION_TYPE.LOGOUT: {
      let loggedIn: boolean = false
      signOut(auth)
        .then(() => {
          loggedIn = false
        })
      return{...state,  isLoggedIn: loggedIn}
    }
    case REDUCER_ACTION_TYPE.UPDATE_USER: {
      if (!action.payload) {
        throw new Error("action.payload missing in UPDATE_USER action");
      }
      const { id, updatedUserData } = action.payload as UpdateUserPayload;
      const updatedUser: UserType = { ...state.currentUser, ...updatedUserData };
      const userDoc = doc(db, "Users", id);
      setDoc(userDoc, updatedUser)
        .then(() => {
          console.log("User data updated in Firestore");
        })
        .catch((error) => {
          throw new Error(error);
        });
      return { ...state, currentUser: updatedUser };
    }
    case REDUCER_ACTION_TYPE.LOAD_USER: {
      let updatedState = { ...state }; // Create a copy of the current state

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // console.log('User Logged in');
          const userDoc = doc(db, "Users", user.uid);
          const docSnapshot = await getDoc(userDoc);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data() as UserType;
            // console.log(userData);
            updatedState = { ...state, currentUser: userData, isLoggedIn: true }; // Update the local copy of state with the fetched user data
            localStorage.setItem('updatedState', JSON.stringify(updatedState))
          }
        }
      });

      // console.log(JSON.parse(localStorage.getItem("updatedState")!)); // Log the updated state
      return JSON.parse(localStorage.getItem("updatedState")!); // Return the updated state
    }
    default:
      throw new Error('Undefined reducer action type')
  }
}

const useAuthContext = (initAuthContext: AuthStateType) => {
  const [state, dispatch] = useReducer(reducer, initAuthContext)
  useEffect(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.LOAD_USER })
  }, [])
  
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])
  // console.log(state.currentUser)

  return {dispatch, REDUCER_ACTIONS, currentUser: state.currentUser, isLoggedIn: state.isLoggedIn}
}

export type UseAuthContextType = ReturnType<typeof useAuthContext>

const initAuthContextState: UseAuthContextType = {
  dispatch: () => { },
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  currentUser: initAuthContext.currentUser,
  isLoggedIn: initAuthContext.isLoggedIn,
}

export const AuthContext = createContext<UseAuthContextType>(initAuthContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const AuthProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <AuthContext.Provider value={useAuthContext(initAuthContext)}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
