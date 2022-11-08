import "./Nav.css";

export const Nav = ({ onPageChange = () => {} }) => {
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
            Basket
          </a>
        </li>
      </ul>
    </nav>
  );
};
