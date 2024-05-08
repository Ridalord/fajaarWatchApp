import { ReactElement, createContext, useState } from "react";

type ChildrenType = { children?: ReactElement | ReactElement[] };
type UseCurrencyContext = {
  currency: string,
  toggleCurrency: (newCurrency: string) => void
}

const CurrencyContext = createContext<UseCurrencyContext>({
  currency: "USD",
  toggleCurrency: () => { }
});

export default function CurrencyProvider({ children }: ChildrenType): ReactElement {
  const [currency, setCurrency] = useState<string>('USD');

  const toggleCurrency = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const contextValue: UseCurrencyContext = {
    currency: currency,
    toggleCurrency: toggleCurrency
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
}
