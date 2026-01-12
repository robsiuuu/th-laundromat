import "./../styles/Header.css";

function Header() {
  return (
    <header>
        <h1>T&H Laundromat</h1>

        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
