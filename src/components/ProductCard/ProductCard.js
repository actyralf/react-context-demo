import "./ProductCard.css";
import { useContext } from "react";
import { BasketContext } from "../../context/basket-context";

export const ProductCard = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <section className="product-card">
      <h2>{product.name}</h2>
      <p>
        {product.price.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })}
      </p>

      <button
        onClick={() => {
          addToBasket(product);
        }}
      >
        Add to Cart
      </button>
    </section>
  );
};
