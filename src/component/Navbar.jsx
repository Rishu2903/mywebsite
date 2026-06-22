import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const closeNavbar = () => {
    const toggleBtn = document.querySelector(".navbar-toggler");
    const nav = document.getElementById("nav");

    if (nav.classList.contains("show")) {
      toggleBtn.click();
    }
  };
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand brand fw-bold" to="/">
          JSRAK
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
