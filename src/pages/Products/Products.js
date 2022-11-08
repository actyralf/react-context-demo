import { ProductList } from "../../components/ProductList/ProductList";
export const Products = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};
