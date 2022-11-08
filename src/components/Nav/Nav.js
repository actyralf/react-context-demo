import "./Nav.css";
import { useContext } from "react";
import { BasketContext } from "../../context/basket-context";

export const Nav = ({ onPageChange = () => {} }) => {
  const { productsInBasket } = useContext(BasketContext);
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a
            href="#products"
            onClick={(event) => {
              event.preventDefault();
              onPageChange("products");
            }}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              onPageChange("contact");
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#basket"
            onClick={(event) => {
              event.preventDefault();
              onPageChange("basket");
            }}
          >
            Basket ({productsInBasket.length})
          </a>
        </li>
      </ul>
    </nav>
  );
};
