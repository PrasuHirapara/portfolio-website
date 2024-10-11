import { useState } from "react";
import { Link } from "react-scroll";
import toggle_bgColor from "../utils/toggle_bgColor";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar--title">Prasu Hirpara</div>
          <label className="switch">
            <input type="checkbox" onChange={toggle_bgColor} />
            <span className="slider round"></span>
          </label>
          <div className={`navbar--menu ${isMenuOpen ? "open" : ""}`}>
            <div className="navbar--text-button">
              <Link smooth={true} duratio={500} to="about">About</Link>
            </div>
            <div className="navbar--text-button">
              <Link smooth={true} duratio={500} to="skills">Skills</Link>
            </div>
            <div className="navbar--text-button">
              <Link smooth={true} duratio={500} to="projects">Projects</Link>
            </div>
            <div className="navbar--text-button">
              <Link smooth={true} duratio={500} to="contact">Contact</Link>
            </div>
          </div>
          <button className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
}