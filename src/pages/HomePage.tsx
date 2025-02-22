import React, { useEffect, useRef } from "react";
import "./HomePage.scss";

export default function HomePage() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    rowRefs.current.forEach((row) => {
      if (row) {
        if (scrollY > 50) {
          row.style.transform = "rotate(0deg)";
        } else {
          row.style.transform = "rotate(10deg)";
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clone templates for infinite scroll effect
  const firstRowTemplates = Array(10).fill(null); // Doubled for seamless loop
  const secondRowTemplates = Array(6).fill(null); // Doubled for seamless loop

  return (
    <div className="home-page">
      <div className="template-background">
        <div
          className="row"
          ref={(el) => {
            rowRefs.current[0] = el;
          }}
        >
          <div className="row-content">
            {firstRowTemplates.map((_, index) => (
              <div key={index} className="templates"></div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="row-content">
            {firstRowTemplates.map((_, index) => (
              <div key={`duplicate-${index}`} className="templates"></div>
            ))}
          </div>
        </div>
        <div
          className="row"
          ref={(el) => {
            rowRefs.current[1] = el;
          }}
        >
          <div className="row-content reverse">
            {secondRowTemplates.map((_, index) => (
              <div key={index} className="templates"></div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="row-content reverse">
            {secondRowTemplates.map((_, index) => (
              <div key={`duplicate-${index}`} className="templates"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="goals-body"></div>
    </div>
  );
}
