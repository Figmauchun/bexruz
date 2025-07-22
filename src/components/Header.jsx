import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import logo from "/imgs/logo.png";
function Header() {
  return (
    <header>
      <nav>
        <div className="ul-box">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Products</Link>
            </li>
          </ul>
        </div>
        <div className="logo-box">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="icon-box">
          <div className="icon">
            <FaShoppingCart />
          </div>

          <button>
            <Link to="/contact">Contact</Link>
          </button>
          <button>
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
