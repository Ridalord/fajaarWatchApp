import { useContext } from "react";
import { CurrencyContext, UseCurrencyContext } from "../context/CurrencyProvider";

const useCurrency = (): UseCurrencyContext  => {
  return useContext(CurrencyContext)
}

export default useCurrency