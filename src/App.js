import "./App.css";
import { useState } from "react";
import { Basket } from "./pages/Basket/Basket";
import { Contact } from "./pages/Contact/Contact";
import { Products } from "./pages/Products/Products";
import { Nav } from "./components/Nav/Nav";
import { initialProducts } from "./data/products";
import { BasketContextProvider } from "./context/basket-context";

function App() {
  // eslint-disable-next-line
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState("products");

  const pageComponent =
    currentPage === "basket" ? (
      <Basket />
    ) : currentPage === "contact" ? (
      <Contact />
    ) : currentPage === "products" ? (
      <Products products={products} />
    ) : (
      <h1>Keine Page gefunden!</h1>
    );

  return (
    <BasketContextProvider>
      <div className="App">
        <Nav
          onPageChange={(newPage) => {
            setCurrentPage(newPage);
          }}
        />
        {pageComponent}
      </div>
    </BasketContextProvider>
  );
}

export default App;
