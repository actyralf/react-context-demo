import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  return (
    <section className="product-card">
      <h2>{product.name}</h2>
      <p>
        {product.price.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })}
      </p>
      <button>Add to Cart</button>
    </section>
  );
};
