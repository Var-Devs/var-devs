import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import template1 from "../assets/template_img/1.png";
import template2 from "../assets/template_img/2.png";
import template3 from "../assets/template_img/3.png";
import template4 from "../assets/template_img/4.png";
import template5 from "../assets/template_img/5.png";
import template6 from "../assets/template_img/6.png";
import template7 from "../assets/template_img/7.png";
import template8 from "../assets/template_img/8.png";

import chatIcon from "../assets/chatIcon.png";
import figmaIcon from "../assets/flutterIcon.png";
import safariIcon from "../assets/safariIcon.png";

const HomePage: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const images = [
    template1,
    template2,
    template3,
    template4,
    template5,
    template6,
    template7,
    template8
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="template-background">
        <div className={`scroll-row left ${isTop ? "tilted" : ""}`}>
          <div className="scroll-content">
            {images.map((img, index) => (
              <img key={index} src={img} className="templates" />
            ))}
            {images.map((img, index) => (
              <img key={`duplicate-${index}`} src={img} className="templates" />
            ))}
          </div>
        </div>

        <div className={`scroll-row right ${isTop ? "tilted" : ""}`}>
          <div className="scroll-content">
            {images.map((img, index) => (
              <img key={index} src={img} className="templates" />
            ))}
            {images.map((img, index) => (
              <img key={`duplicate-${index}`} src={img} className="templates" />
            ))}
          </div>
        </div>
      </div>
      <div className="goals-body">
        <div className="header">
          <h3>Your IDEA</h3>
        </div>
        <div className="main">
          <div className="side">
            <h1>Work Structure</h1>
          </div>
          <div className="work-structure">
            <div className="header">
              <h1>Is Our Goal</h1>
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
      </div>
      <footer>
        <p>&copy; Var Devs {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default HomePage;
