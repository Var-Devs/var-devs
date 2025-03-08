import "./NavigationBar.scss";

import Logo from "../assets/Logo.png";
// import { useEffect, useMemo, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";

export default function NavigationBar() {
  const scrollThreshhold = 80;
  const [scrollAmount, setScrollAmount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div
          className={
            scrollAmount > window.innerHeight - scrollThreshhold
              ? "background-gradient left"
              : "background-gradient"
          }
        ></div>
        <div
          className={
            scrollAmount > window.innerHeight - scrollThreshhold
              ? "brand disappear"
              : "brand"
          }
        >
          <Link to="/" className="logo">
            <h1>VarDevs</h1>
          </Link>
          <img src={Logo} />

          {/* )} */}
          <div className="links">
            <Link to="/">Home</Link>
            {/* <Link to="#">Demo</Link> */}
            <Link to="/services">Services</Link>
            <Link to="/about-us">About Us</Link>
            {/* <Link to="#">Team</Link> */}
            <Link to="/contact-us">Contact</Link>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiMiniXMark size={30} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </button>
        </div>
      </nav>
      <div className={`side-nav ${menuOpen ? "open" : ""}`}>
        <div className="links">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
