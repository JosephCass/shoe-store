import { Link } from "react-router-dom";
import shoePoster from "../assets/shoeposter.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="poster-container">
        <img
          className="home-poster"
          src={shoePoster}
          alt="Shoe ad poster"
        ></img>
        <Link className="home-shop-btn" to="/products">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
