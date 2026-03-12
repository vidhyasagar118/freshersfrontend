import React from "react";
import "./Contact.css";
import myphoto from "../assets/myphoto.jpeg";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactCard devStyle">

        {/* LEFT - PHOTO */}
        <div className="contactLeft">
          <img src={myphoto} alt="Vidhya Sagar" className="profileImage" />
        </div>

        {/* RIGHT - DETAILS */}
        <div className="contactRight">
          <h2 className="contactName">Vidhya Sagar Kushwaha</h2>
          <p className="contactEnroll">Btech 2nd year  (MGCUB) </p>

          <p className="contactInfo">📧 abhishekhkushwah.118@gmail.com</p>
          <p className="contactInfo">📞 6367697913</p>

          <p className="devQuote">
            “Turning coffee ☕ into code, bugs into features,  
            and ideas into scalable web experiences.”
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
