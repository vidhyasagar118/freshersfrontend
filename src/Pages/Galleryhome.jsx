import React from "react";
import "./Galleryhome.css";
import { useNavigate } from "react-router-dom";

const images = [
  "/galleryhome/galleryhome1.jpeg",
  "/galleryhome/galleryhome2.jpeg",
  "/galleryhome/galleryhome3.jpeg",
  "/galleryhome/galleryhome4.jpeg",
];

const Galleryhome = () => {
  const navigate = useNavigate();

  return (
    <div className="gallerymainhome">
      <h1>Freshers 2024 Photos</h1>

      <div className="gallerygrid">
        {images.map((img, index) => (
          <div className="gallerycard" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>

      <button className="morebtn" onClick={() => navigate("/gallery")}>
        More Photos
      </button>
    </div>
  );
};

export default Galleryhome;
