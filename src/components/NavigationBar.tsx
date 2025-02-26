import "../index.scss";

import { useEffect, useMemo, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const currentPage = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
        const maxScroll = window.innerHeight * 0.6;
        const scrollTop = Math.min(window.scrollY, maxScroll);
        const scrollPercent = (scrollTop / maxScroll) * 100;

        setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrollProgress)
  const titleStyling = useMemo(() => {
    const inverseFactor = 1 - scrollProgress / 100
    const baseHeight = "calc(50vh - 40px)"
    const fontMinSize = 35
    const fontMaxSize = 160
    const shadowBlur = 10 - (10 * (scrollProgress / 100))
    const shadowOpacity = 1 - (scrollProgress / 100)
    
    return {
      top: `calc(${inverseFactor} * (${baseHeight}))`,
      fontSize: `${fontMinSize + (fontMaxSize - fontMinSize) * inverseFactor}px`,
      textShadow: `-5px 10px ${Math.max(shadowBlur, 0)}px rgba(0, 0, 0, ${shadowOpacity})`
    }
  }, [scrollProgress])

  const logoStyling = useMemo(() => {
    const leftMax = -34

    return {
      left: `${leftMax - (leftMax * (scrollProgress / 100))}vw`,
    }
  }, [scrollProgress])

  return (
    <nav>
        {currentPage.pathname === "/" ? (
            <div className="logo">
              <h1 className="titleAnim" style={titleStyling}>VarDevs</h1>
              <img src={Logo} className="logoAnim" style={logoStyling}/>
            </div>
          ) : (
            <div className="logo">
              <h1>VarDevs</h1>
              <img src={Logo}/>
            </div>
          )
        }
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="#">Demo</Link> */}
        <Link to="/services">Services</Link>
        {/* <Link to="#">Team</Link> */}
        <Link to="/contact-us">Contact</Link>
      </div>
    </nav>
  );
}
