import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleColor = () => {
    let root = document.documentElement;

    if (toggle) {
      root.style.setProperty('--bg-color', 'black');
      root.style.setProperty('--color', 'white');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--color', 'black');
      root.setAttribute('data-theme', 'light');

      const circles = document.querySelectorAll('.skills--circle::after');
      circles.forEach(circle => {
        circle.style.background = 'rgba(51, 51, 51, 0.5)';
      });
    }
  }

  useEffect(toggleColor, [toggle])

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar--title">Prasu Hirpara</div>
          <label className="switch">
            <input type="checkbox" onChange={() => setToggle(!toggle)} />
            <span className="slider round"></span>
          </label>
          <div className={`navbar--menu ${isMenuOpen ? "open" : ""}`}>
            <div className="navbar--text-button">
              <Link smooth={true} duration={500} to="aboutme">About</Link>
            </div>
            <div className="navbar--text-button">
              <Link smooth={true} duration={500} to="skills">Skills</Link>
            </div>
            <div className="navbar--text-button">
              <Link smooth={true} duration={500} to="projects">Projects</Link>
            </div>
            <div className="navbar--text-button">
              <Link smooth={true} duration={500} to="contact">Contact</Link>
            </div>
          </div>
          <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
}