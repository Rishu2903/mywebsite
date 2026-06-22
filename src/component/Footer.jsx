import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* BRAND */}
        <div className="footer-brand">
          <h2>JSRAK</h2>
          <p>
            We build scalable digital products, websites and mobile apps for modern businesses.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Services</h3>
          <a>Web Development</a>
          <a>Mobile Apps</a>
          <a>API Development</a>
          <a>Cloud Solutions</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JSRAK. All rights reserved.</p>
      </div>
    </footer>
  );
}