import { ReactElement, createContext, useState } from "react"

export type ReviewType = {
  id: string,
  name: string,
  rating: number,
  remark: string,
}

export type ProductType = {
  id: string,
  name: string,
  price: number,
  description: string,
  rating: number,
  category: string,
  reviews: ReviewType[]
}

const initState: ProductType[] = []

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products] = useState<ProductType[]>(initState)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}