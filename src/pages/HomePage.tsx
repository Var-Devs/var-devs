
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

import "./HomePage.scss";

import chatIcon from "../assets/icons/chat.png";
import figmaIcon from "../assets/icons/figma.png";
import safariIcon from "../assets/icons/safari.png";

import { pageTitle } from "../hooks/pageTitle";

export default function HomePage() {
  const [isTop, setIsTop] = useState(window.scrollY < 100);
  const navigate = useNavigate(); // Initialize navigation

  const topTemplates = Object.keys(import.meta.glob("/src/assets/templates/*.{png,jpg,jpeg,svg}")).sort(() => Math.random() - 0.5)
  const bottomTemplates = Object.keys(import.meta.glob("/src/assets/templates/*.{png,jpg,jpeg,svg}")).sort(() => Math.random() - 0.5)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  pageTitle("Welcome!");

  return (
    <div className="home-page">
      <div className="template-background">
        <div className={`scroll-row left ${isTop ? "tilted" : ""}`}>
          <div className="scroll-content" style={{color: "white"}}>
            { topTemplates.map((template, index) => (
              <img key={`template-${index}`} src={template} className="templates" />
            ))}
            { topTemplates.map((template, index) => (
              <img key={`duplicate-${index}`} src={template} className="templates" />
            )) }
          </div>
        </div>

        <div className={`scroll-row right ${isTop ? "tilted" : ""}`}>
          <div className="scroll-content">
            {bottomTemplates.map((template, index) => (
              <img key={index} src={template} className="templates" />
            ))}
            {bottomTemplates.map((template, index) => (
              <img key={`duplicate-${index}`} src={template} className="templates" />
            ))}
          </div>
        </div>
      </div>
      <div className="goals-body">
        <div className="header">
          <h3>Let's make your ideas</h3>
        </div>
        <div className="main">
          <div className="side">
            <h1>Work Structure</h1>
          </div>
          <div className="work-structure">
            <div className="header">
              <h1>a reality.</h1>
            </div>
            <div className="work-structure-body">
              <div className="structure-box">
                <div className="work-header">
                  <h1>Chat</h1>
                  <img src={chatIcon} />
                </div>

                <p>
                  Every great website starts with a conversation. We take the
                  time to understand your business, your goals, and your vision.
                  Whether you need a simple portfolio, an e-commerce store, or a
                  custom solution, we’ll listen to your ideas and suggest the
                  best approach.
                </p>
              </div>
              <div className="structure-box">
                <div className="work-header">
                  <h1>Design</h1>
                  <img src={figmaIcon} />
                </div>

                <p>
                  Once we understand your needs, we move to the design phase.
                  This is where your vision takes shape. We create a clean,
                  modern, and user-friendly design tailored to your business.
                  Every element, from colors to layout, is chosen to enhance the
                  user experience and match your brand identity.
                </p>
              </div>
              <div className="structure-box">
                <div className="work-header">
                  <h1>Develop</h1>
                  <img src={safariIcon} />
                </div>

                <p>
                  With the design approved, we start building your website. We
                  use the latest technologies to ensure fast loading times,
                  smooth navigation, and mobile responsiveness. Whether it's a
                  static website or a dynamic platform, we develop it with
                  efficiency and security in mind. Once everything is ready, we
                  launch your website and make sure it works flawlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-container">
          <button className="cta-button" onClick={() => navigate("/contactus")}>
            Get in Touch
          </button>
        </div>
      </div>

        {/* 
        SOCIAL FOOTER FOR WHEN WE'RE RICH
        <div className="social-buttons">
            <a
              href="https://github.com/var-devs"
              target="_blank"
              rel="noopener noreferrer">
              <img src={"./src/assets/socialicons/github-logo.png"} alt="Vardevs GitHub" className="social-icon" />
            </a>
          </div> */}
      <footer>
        <p>&copy; Vardevs {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};
