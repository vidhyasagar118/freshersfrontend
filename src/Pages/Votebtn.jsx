import React from "react";
import "./Votebtn.css";
import { useNavigate } from "react-router-dom";

const Votebtn = () => {
  const navigate = useNavigate();

  return (
    <div className="homevotesection">
      <h1 className="votebtnh1">VOTE SECTION</h1>

      <span className="btn">
        <button
          className="Votepageshow"
          onClick={() => navigate("/vote")}
        >
          GO TO VOTE
        </button>
      </span>
    </div>
  );
};

export default Votebtn;
