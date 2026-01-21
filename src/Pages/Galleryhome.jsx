import React from 'react';
import "./Galleryhome.css";
import { Navigate, useNavigate } from 'react-router-dom';
const images = [
  "https://i.pinimg.com/originals/a9/56/14/a95614f4885a0b91175902e6910b7178.jpg",
  "https://i.pinimg.com/originals/a9/56/14/a95614f4885a0b91175902e6910b7178.jpg",
  "https://i.pinimg.com/originals/a9/56/14/a95614f4885a0b91175902e6910b7178.jpg",
  "https://i.pinimg.com/originals/a9/56/14/a95614f4885a0b91175902e6910b7178.jpg",
];

const Galleryhome = () => {
  const navigate=useNavigate();
  return (
    <div className='gallerymainhome'>
      <h2>Freshers 2024 photos</h2>
      <div className='gallerygrid'>
        {images.map((img, index) => (
          <div className='gallerycard' key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className='morebtn' onClick={()=>{navigate("/gallery")}}>more photos</button>
    </div>
  );
};

export default Galleryhome;
