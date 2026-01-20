import React from "react";
import "./About.css";

const batch2024 = [
  { name: "AARADHAYA KUMARI", enrollmentno: "MGCU2024CSIT3001", src: "" },
  { name: "ANUBHAV SINGH", enrollmentno: "MGCU2024CSIT3002", src: "" },
  { name: "ANURAG SINGH GAUR", enrollmentno: "MGCU2024CSIT3003", src: "" },
  { name: "GEETANSHU MAURYA", enrollmentno: "MGCU2024CSIT3004", src: "" },
  { name: "HRISHU SINHA", enrollmentno: "MGCU2024CSIT3006", src: "" },
  { name: "KIRTI DAS", enrollmentno: "MGCU2024CSIT3007", src: "" },
  { name: "MANISH KUMAR", enrollmentno: "MGCU2024CSIT3008", src: "" },
  { name: "MOHIT RAJ", enrollmentno: "MGCU2024CSIT3009", src: "" },
  { name: "MUSKAN JHA", enrollmentno: "MGCU2024CSIT3010", src: "" },
  { name: "NITIN GAUTAM", enrollmentno: "MGCU2024CSIT3011", src: "" },
  { name: "PIYUSH KUMAR", enrollmentno: "MGCU2024CSIT3012", src: "" },
  { name: "PRERNA SINGH", enrollmentno: "MGCU2024CSIT3014", src: "" },
  { name: "PRIYADARSH KUMAR", enrollmentno: "MGCU2024CSIT3015", src: "" },
  { name: "RAJ KRISHNA S", enrollmentno: "MGCU2024CSIT3016", src: "" },
  { name: "RIPU RAJ ARYAN", enrollmentno: "MGCU2024CSIT3017", src: "" },
  { name: "RITIK KUMAR", enrollmentno: "MGCU2024CSIT3018", src: "" },
  { name: "ROUNAK KUMAR SINGH", enrollmentno: "MGCU2024CSIT3019", src: "" },
  { name: "SACHIN KUMAR", enrollmentno: "MGCU2024CSIT3020", src: "" },
  { name: "SHASHANK RAUSHAN", enrollmentno: "MGCU2024CSIT3022", src: "" },
  { name: "SHIVAM KUMAR", enrollmentno: "MGCU2024CSIT3023", src: "" },
  { name: "SHIVANI KESHARI", enrollmentno: "MGCU2024CSIT3024", src: "" },
  { name: "SHIVEN SRIVASTAVA", enrollmentno: "MGCU2024CSIT3025", src: "" },
  { name: "TULIKA KUMARI", enrollmentno: "MGCU2024CSIT3027", src: "" },
  { name: "UJJAWAL RAJ", enrollmentno: "MGCU2024CSIT3028", src: "" },
  { name: "VIDHYA SAGAR", enrollmentno: "MGCU2024CSIT3029", src: "" },
  { name: "VISHAL PRATAP SINGH", enrollmentno: "MGCU2024CSIT3030", src: "" },
  { name: "MD ASIF", enrollmentno: "MGCU2024CSIT3031", src: "" },
  { name: "ONKAR UPADHYAY", enrollmentno: "MGCU2024CSIT3032", src: "" },
  { name: "PIYUSH SINHA", enrollmentno: "MGCU2024CSIT3034", src: "" },
  { name: "RASHMI KUMARI", enrollmentno: "MGCU2024CSIT3035", src: "" },
  { name: "SAURAV KUMAR", enrollmentno: "MGCU2024CSIT3036", src: "" },
  { name: "UJJWAL KUMAR", enrollmentno: "MGCU2024CSIT3037", src: "" },
  { name: "VISHWJEET", enrollmentno: "MGCU2024CSIT3038", src: "" }
];

const About = () => {
  return (
    <div className="aboutmaindiv">

      <div className="abouttopdiv">
        <h1>Program Orientation</h1>
        <h2>By B.Tech Batch 2024 – 2028</h2>
        <p>
          This program orientation is organized by the students of B.Tech Batch
          2024–28 with the aim of building leadership, teamwork, and technical
          awareness among students.
        </p>
      </div>

<div className="aboutmaingriddiv">
  {batch2024.map((printdata, index) => (
    <div className="aboutgridcard" key={index}>
      <img src={printdata.src || "/defaultuser.png"} alt={printdata.name} />
      <h4>{printdata.name}</h4>
      <p>{printdata.enrollmentno}</p>
    </div>
  ))}
</div>

      <div className="aboutinfodiv">
        <h2>Mahatma Gandhi Central University (MGCU)</h2>
        <p>
          Mahatma Gandhi Central University, Motihari is a Central University
          established by an Act of Parliament. The B.Tech program focuses on
          quality technical education, research, and innovation. The university
          provides modern infrastructure, experienced faculty, and a strong
          academic environment to shape future engineers.
        </p>
        <p>
          Students can explore various opportunities in academics, technical
          events, research projects, and industry exposure through workshops and
          training programs.
        </p>
      </div>

      {/* 🔷 Quote */}
      <div className="aboutquotediv">
        <p>
          “Great things are never done by one person, they are done by a team.
          Together, we grow and build a brighter future.”
        </p>
      </div>

    </div>
  );
};

export default About;
