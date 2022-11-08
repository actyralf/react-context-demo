import { ProductList } from "../../components/ProductList/ProductList";
import { useContext } from "react";
import { BasketContext } from "../../context/basket-context";
export const Products = ({ products }) => {
  const { productsInBasket } = useContext(BasketContext);
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
      {JSON.stringify(productsInBasket)}
    </div>
  );
};
