import React, { useEffect, useState } from "react";
import "./Mostexpectedvote.css";
import { API_URL } from "../config";

const Mostexpectedvote = () => {
  const [topStudents, setTopStudents] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/students/top`)
      .then((res) => res.json())
      .then((data) => {
        // ✅ only students with 1 or more votes
        const filtered = data.filter((s) => s.votes >= 1);

        // ✅ only top 4
        setTopStudents(filtered.slice(0, 4));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="Mostexpectedvotemaindiv">
      <h1>Top Voted Students</h1>

      <div className="Mostexpectedvotediv">
        {topStudents.length === 0 ? (
          <p style={{ color: "gold" ,textAlign:"center"}}>No votes yet</p>
        ) : (
          topStudents.map((s, index) => (
            <div className="Mostexpectedvote" key={s._id}>
              <img
                src={`/student2025img/${s.enrollmentnum}.jpg`}
                alt={s.name}
                onError={(e) => (e.target.src = "/default.jpeg")}
                width="80"
              />

              <p><b>{index + 1}. {s.name}</b></p>
              <p>Votes: {s.votes}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mostexpectedvote;
