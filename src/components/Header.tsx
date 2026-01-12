import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>T&H Laundromat</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;