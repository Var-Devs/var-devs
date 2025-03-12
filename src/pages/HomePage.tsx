import "./HomePage.scss";

import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

import { ChatBubbleIcon } from "@radix-ui/react-icons";

import chatIcon from "../assets/icons/chat.png";
import figmaIcon from "../assets/icons/figma.png";
import safariIcon from "../assets/icons/safari.png";

import { pageTitle } from "../hooks/pageTitle";
import { getScreenWidth } from "../hooks/screenWidth";
//Imgages
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import React from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const screenWidth = getScreenWidth();

  // const [templates, setTemplates] = useState<{
  //   top: string[];
  //   bottom: string[];
  // }>({ top: [], bottom: [] });

  // useEffect(() => {
  //   const templates = Object.keys(
  //     import.meta.glob("/src/assets/templates/*.{png,jpg,jpeg,svg}")
  //   );
  //   const topShuffleOrder = [...Array(8).keys()].sort(
  //     () => Math.random() - 0.5
  //   );
  //   const bottomShuffleOrder = [...Array(8).keys()].sort(
  //     () => Math.random() - 0.5
  //   );

  //   const topTemplates = topShuffleOrder
  //     .map((i) => templates[i])
  //     .concat(topShuffleOrder.map((i) => templates[i]));
  //   const bottomTemplates = bottomShuffleOrder
  //     .map((i) => templates[i])
  //     .concat(bottomShuffleOrder.map((i) => templates[i]));
  //   setTemplates({
  //     top: topTemplates,
  //     bottom: bottomTemplates
  //   });
  // }, []);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  pageTitle("Welcome!");

  return (
    <div className="home-page">
      <div className="project-gallery">
        <div className="slide-wrapper">
          <div className="slider">
            <img id="project1" src={project1} alt="image of fashion website" />
            <img
              id="project2"
              src={project2}
              alt="image of protafolio website"
              onClick={() => window.open("https://shub.website", "_blank")}
            />
          </div>
          <div className="slide-nav">
            <a
              href="#project1"
              onClick={(e) => handleScroll(e, "project1")}
            ></a>
            <a
              href="#project2"
              onClick={(e) => handleScroll(e, "project2")}
            ></a>
          </div>
        </div>
      </div>
      {screenWidth > 1200 ? (
        <div className="structure-container">
          <div className="subheader-box">
            <h2 id="your-idea">Your IDEA 💡</h2>
          </div>
          <div className="structure-subbox">
            <div className="column-left">
              <h1 id="work-structure">Work Structure</h1>
            </div>
            <div className="column-right column">
              <div className="header-box">
                <h1 id="is-our-goal">Is our GOAL 🎯</h1>
              </div>
              <div className="structure-items">
                <div className="row top-row">
                  <div className="item box-1">
                    <span>
                      <h2>Talk</h2>
                      <img src={chatIcon} />
                    </span>
                    <p>
                      Every great website starts with a conversation. We begin
                      by understanding your vision, goals, and what makes your
                      brand unique. Whether you're starting from scratch or
                      looking to revamp an existing site, we'll guide you
                      through the process, ensuring your ideas take shape in a
                      way that's both visually stunning and strategically
                      effective.
                    </p>
                  </div>
                  <div className="item box-2">
                    <span>
                      <h2>Design</h2>
                      <img src={figmaIcon} />
                    </span>
                    <p>
                      Once we understand your needs, we move to the design
                      phase. This is where your vision takes shape. We create a
                      clean, modern, and user-friendly design tailored to your
                      business. Every element, from colors to layout, is chosen
                      to enhance the user experience and match your brand
                      identity.
                    </p>
                  </div>
                </div>
                <div className="row bottom-row">
                  <div className="item box-3">
                    <span>
                      <h2>Create</h2>
                      <img src={safariIcon} />
                    </span>
                    <p>
                      With the design approved, we start building your website.
                      We use the latest technologies to ensure fast loading
                      times, smooth navigation, and mobile responsiveness.
                      Whether it's a static website or a dynamic platform, we
                      develop it with efficiency and security in mind. Once
                      everything is ready, we launch your website and make sure
                      it works flawlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="structure-container">
          <div className="subheader-box">
            <h1 id="work-structure">Our Work Structure</h1>
          </div>
          <div className="structure-subbox">
            <div className="column">
              <div className="structure-items">
                <div className="row">
                  <div className="item box-1">
                    <span>
                      <h2>Talk</h2>
                      <img src={chatIcon} />
                    </span>
                    <p>
                      Every great website starts with a conversation. We begin
                      by understanding your vision, goals, and what makes your
                      brand unique. Whether you're starting from scratch or
                      looking to revamp an existing site, we'll guide you
                      through the process, ensuring your ideas take shape in a
                      way that's both visually stunning and strategically
                      effective.
                    </p>
                  </div>
                  <div className="item box-2">
                    <span>
                      <h2>Design</h2>
                      <img src={figmaIcon} />
                    </span>
                    <p>
                      Once we understand your needs, we move to the design
                      phase. This is where your vision takes shape. We create a
                      clean, modern, and user-friendly design tailored to your
                      business. Every element, from colors to layout, is chosen
                      to enhance the user experience and match your brand
                      identity.
                    </p>
                  </div>
                  <div className="item box-3">
                    <span>
                      <h2>Create</h2>
                      <img src={safariIcon} />
                    </span>
                    <p>
                      With the design approved, we start building your website.
                      We use the latest technologies to ensure fast loading
                      times, smooth navigation, and mobile responsiveness.
                      Whether it's a static website or a dynamic platform, we
                      develop it with efficiency and security in mind. Once
                      everything is ready, we launch your website and make sure
                      it works flawlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us">
            <button onClick={() => navigate("/contact-us")}>
              <ChatBubbleIcon id="chat-bubble" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
