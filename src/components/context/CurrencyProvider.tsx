import { ReactElement, createContext, useEffect, useState } from "react";

type ChildrenType = { children?: ReactElement | ReactElement[] };
export type UseCurrencyContext = {
  currency: string,
  rate: number,
  toggleCurrency: (newCurrency: string) => void
}

 export const CurrencyContext = createContext<UseCurrencyContext>({
   currency: "USD",
   rate: 1,
    toggleCurrency: () => { }
  });

export default function CurrencyProvider({ children }: ChildrenType): ReactElement {
  const [currency, setCurrency] = useState<string>('USD');
  const [rate, setRate] = useState<number>(1);

  const toggleCurrency = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const contextValue: UseCurrencyContext = {
    currency: currency,
    rate: rate,
    toggleCurrency: toggleCurrency
  };

  const BASE_URL = 'https://free.currconv.com/api/v7/convert?q=USD_NGN&compact=ultra&apiKey=f669aba4a07fadf920a6'


  useEffect(() => {
    if (currency === 'NGN') {
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data => setRate(data.USD_NGN)) 
    } else {
      setRate(1)
    }
  },[currency])

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
}
