import React, { useEffect, useRef } from "react";
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

export default function HomePage() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    rowRefs.current.forEach((row) => {
      if (row) {
        if (scrollY > 20) {
          row.style.transform = "rotate(0deg)";
        } else {
          row.style.transform = "rotate(20deg)";
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

  return (
    <div className="home-page">
      <div className="template-background">
        <div
          className="row"
          ref={(el) => {
            rowRefs.current[0] = el;
          }}
        >
          <img src={template1} className="templates" />
          {/* <img src={teamplate1} /> */}
          {/* </div> */}
          <img src={template2} className="templates" />
          <img src={template3} className="templates" />
          <img src={template7} className="templates" />
        </div>
        <div
          className="row"
          ref={(el) => {
            rowRefs.current[1] = el;
          }}
        >
          <img src={template4} className="templates" />
          {/* <img src={teamplate1} /> */}
          {/* </div> */}
          <img src={template5} className="templates" />
          <img src={template6} className="templates" />
          <img src={template8} className="templates" />
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
}
