import "../styles/footer.css";
import logo from "../assets/logo.png";
const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-brand">
              <h3>
                <img className="nav-logo" src={logo} alt="" /> Electricals
              </h3>
              <p>Electrical Contractors & Engineers</p>
            </div>
            <p className="company-description">
              Professional electrical services with over 3+ years of trusted
              expertise. Licensed electrical engineers providing residential,
              commercial, and industrial solutions across Perth and surrounding
              areas.
            </p>
          </div>

          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "#projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, "#gallery")}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4>Contact Info</h4>
            <div className="contact-details">
              <div className="contact-detail">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  NO101 Nanjappa Colony Block A
                  <br />
                  Bengaluru Karnataka 560045, India
                </p>
              </div>
              <div className="contact-detail">
                <i className="fas fa-phone"></i>
                <p>
                  <a href="tel:+918789819522" className="phone-link">
                    +91 87898 19522
                  </a>
                </p>
                <p>
                  <a href="tel:+918971942796" className="phone-link">
                    +91 89719 42796
                  </a>
                </p>
              </div>
              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=bnelectrical178@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email-link"
                  >
                    bnelectrical178@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2021 BN Electricals. All rights reserved. Licensed Electrical
            Contractors & Engineers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
