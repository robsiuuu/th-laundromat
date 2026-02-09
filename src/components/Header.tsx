import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>T&H Laundromat</h1>
          <p className="tagline">Family Owned Since 2016</p>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="phone">📞 (336) 123-4567</div>
          <div className="hours">🕐 Open 7AM-8PM</div>
        </div>
      </div>
    </header>
  );
}

export default Header;