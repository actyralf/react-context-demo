import { createContext } from "react";
import { useState } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [productsInBasket, setProductsInBasket] = useState([]);

  const addToBasket = (product) => {
    // TODO: Logic to implement basket
    setProductsInBasket([...productsInBasket, { ...product }]);
  };

  return (
    <BasketContext.Provider
      value={{
        productsInBasket,
        addToBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
