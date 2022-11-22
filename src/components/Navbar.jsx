import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-shopping-solid.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="heading-container">
        <h2 className="site-heading">Shoe Store</h2>
      </div>
      <div className="links-container">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/products">
          Products
        </Link>
        <Link className="navbar-link" to="/contact">
          Contact
        </Link>
        <div className="shopping-cart-container">
          <img
            width="25px"
            height="25px"
            src={cartIcon}
            className="shopping-cart-icon"
            alt=""
          />
          <span className="shopping-cart-amount"></span>
        </div>
      </div>
    </div>
  );
}
