import React, { useEffect, useState } from "react";
import Votebtn from "./Votebtn";
import Profecerscard from "./Profecesr/Profecerscard";
import "./Home.css";
import Freshersimg from "../assets/Homeimg.png";
import FreshersMobile from "../assets/freshermobile.jpeg";
import Mostexpectedvote from "./Mostexpectedvote";
import EventrFlow from "../EventFlow";
import Galleryhome from "./Galleryhome";

const Home = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("homeNoticeShown");

    if (!alreadyShown) {
      setShowNotice(true);
      sessionStorage.setItem("homeNoticeShown", "true");

      const timer = setTimeout(() => {
        setShowNotice(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      {showNotice && (
        <div className="topNotice">
          <button
            className="noticeClose"
            onClick={() => {
              setShowNotice(false);
              sessionStorage.setItem("homeNoticeShown", "true");
            }}
          >
            ×
          </button>

          <div className="steps">
            <h1 className="stepsheading">Steps to Vote:</h1>
            <ol className="stepol">
              <li className="step">First Signup</li>
              <li className="step">Then Login</li>
              <li className="step">
                Click <b>Go To Vote</b> Button
              </li>
              <li className="step">
                Vote Button will be enabled only when Timer is Live
              </li>
              <li className="step">Gallery Page → Old Year Photos</li>
              <li className="step">
                Program Details → About Event & Organizers
              </li>
            </ol>
          </div>
        </div>
      )}

      <div className="fresherstempimg">
        <picture>
          <source srcSet={FreshersMobile} media="(max-width: 768px)" />

          <img src={Freshersimg} alt="freshers banner" />
        </picture>
      </div>

      <Votebtn />
      <Mostexpectedvote />
            <EventrFlow />

      <Galleryhome />
      <Profecerscard />
    </div>
  );
};

export default Home;
