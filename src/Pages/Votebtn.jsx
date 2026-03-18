import React, { useEffect, useState } from "react";
import "./Votebtn.css";
import { useNavigate } from "react-router-dom";

const Votebtn = () => {
  const navigate = useNavigate();

  // Set target time to 8:30 PM today
  const targetDate = new Date();
  targetDate.setHours(20, 30, 0, 0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
      setIsLive(false);
    };

    updateTimer(); // Call immediately on mount

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="homevotesection">
      <h1 className="votebtnh1">VOTE SECTION</h1>

      <div className="timerBox">
        <div><span>{timeLeft.days}</span><p>Days</p></div>
        <div><span>{timeLeft.hours}</span><p>Hours</p></div>
        <div><span>{timeLeft.minutes}</span><p>Min</p></div>
        <div><span>{timeLeft.seconds}</span><p>Sec</p></div>
      </div>

      <span className="btn">
        <button
          className="Votepageshow"
          disabled={!isLive}
          onClick={() => navigate("/vote")}

        >
          {isLive ? "GO TO VOTE" : "VOTING NOT STARTED"}
        </button>
      </span>
    </div>
  );
};

export default Votebtn;
