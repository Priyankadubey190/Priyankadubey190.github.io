import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <div className="navContainer">
      <nav className="navbar">
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/47/43/letter-p-black-flower-alphabet-beautiful-capital-vector-31724743.jpg"
          alt=""
          className="logo"
        />
        <ul
          className={Mobile ? "nav-link-mobile" : "nav-link"}
          onClick={() => setMobile(false)}
        >
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1ishFJS-yG2Yn3jKcATXaB9sHJmi5XAp0/view?usp=sharing",
                "_blank"
              );
            }}
          >
            <li>Resume</li>
          </button>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};
