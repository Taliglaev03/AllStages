import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#inicio" className="logo" onClick={closeMenu}>
          <span className="logo-main">ALL STAGES</span>
          <span className="logo-sub">BRICK PAVERS</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>
            Home
          </a>

          <a href="#sobre" onClick={closeMenu}>
            About
          </a>

          <a href="#servicos" onClick={closeMenu}>
            Services
          </a>

          <a href="#processo" onClick={closeMenu}>
            Process
          </a>

          <a href="#projetos" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contato" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contato"
            className="header-cta"
            onClick={closeMenu}
          >
            Get a Free Estimate
          </a>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;