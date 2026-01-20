import React from "react";
import "./Contact.css";
import  myphoto from "../assets/myphoto.jpeg";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactCard">

        <div className="contactImageBox">
          <img src={myphoto} alt="Vidhya Sagar" className="profileImage" />

          <h2 className="contactName">Vidhya Sagar Kushwaha</h2>
          <p className="contactEmail">abhishekhkushwah.118@gmail.com</p>
          <p className="contactPhone">📞 6367697913</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
