import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Freshers 2K26</h2>
          
                      <p>
            Welcome to Freshers Voting Portal <br />
            Vote fairly • Celebrate talent • One vote matters
          </p>

        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/vote")}>Vote</li>

            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>📧 abhishekhkushwah.118@gmail.com</p>
          <p>📍 MGCU Campus</p>
        </div>

      </div>

      <div className="footer-bottom">
        @ 2K26 Freshers Voting || All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
