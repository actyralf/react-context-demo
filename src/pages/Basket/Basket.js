import { useContext } from "react";
import { BasketContext } from "../../context/basket-context";
import { ProductList } from "../../components/ProductList/ProductList";

export const Basket = () => {
  const { productsInBasket } = useContext(BasketContext);
  return (
    <div>
      <h1>Basket</h1>
      <ProductList products={productsInBasket} />
    </div>
  );
};
