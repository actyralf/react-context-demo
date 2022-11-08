import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";
export const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};
