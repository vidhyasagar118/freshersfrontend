import React, { useEffect, useState } from "react";
import "./About.css";
import { API_URL } from "../config";

const About = () => {
  const [seniors, setSeniors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeniors = async () => {
      try {
        const res = await fetch(`${API_URL}/seniors/about`);
        const data = await res.json();
        setSeniors(data);
      } catch (err) {
        console.error("Senior fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeniors();
  }, []);

  return (
    <div className="aboutmaindiv">
      <div className="abouttopdiv">
        <h1>Program Orientation</h1>
        <h2>By B.Tech Batch 2024 – 2028</h2>
        <p>
          This program orientation is organized by the seniors of B.Tech Batch
          2024–28 with the aim of building leadership, teamwork, and technical
          awareness among students.
        </p>
      </div>

      <div className="aboutmaingriddiv">
        {loading ? (
          <p>Loading...</p>
        ) : (
          seniors.map((senior, index) => (
            <div className="aboutgridcard" key={index}>
              <img
                src={senior.src || "/defaultuser.png"}
                alt={senior.name}
              />
              <h4>{senior.name}</h4>
              <p>{senior.enrollmentno}</p>
            </div>
          ))
        )}
      </div>

      <div className="aboutinfodiv">
        <h2>Mahatma Gandhi Central University (MGCU)</h2>
        <p>
          Mahatma Gandhi Central University, Motihari is a Central University
          established by an Act of Parliament. The B.Tech program focuses on
          quality technical education, research, and innovation.
        </p>
      </div>

      <div className="aboutquotediv">
        <p>
          “Great things are never done by one person, they are done by a team.”
        </p>
      </div>
    </div>
  );
};

export default About;
