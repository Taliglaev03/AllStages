function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-top">

          <div>

            <a href="#inicio" className="footer-logo">
              <span className="logo-main">
                ALL STAGES
              </span>

              <span className="logo-sub">
                BRICK PAVERS
              </span>
            </a>

            <p className="footer-description">
              Professional brick paver installation and hardscape
              solutions designed for lasting performance and
              exceptional outdoor spaces.
            </p>

          </div>

          <div className="footer-column">

            <h4>Navigation</h4>

            <a href="#inicio">Home</a>
            <a href="#sobre">About</a>
            <a href="#servicos">Services</a>
            <a href="#projetos">Projects</a>
            <a href="#contato">Contact</a>

          </div>

          <div className="footer-column">

            <h4>Services</h4>

            <a href="#servicos">Driveways</a>
            <a href="#servicos">Patios</a>
            <a href="#servicos">Walkways</a>
            <a href="#servicos">Pool Decks</a>
            <a href="#servicos">Paver Repair</a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {currentYear} All Stages Brick Pavers. All rights reserved.
          </span>

          <span>
            Professional Hardscape Solutions
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;