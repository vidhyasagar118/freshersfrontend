import React, { useEffect, useState } from 'react'
import "./Votebtn.css"
import { useNavigate } from 'react-router-dom'

const Votebtn = () => {
  const navigate = useNavigate();

  const targetDate = new Date("2026-03-02T21:30:00"); // 25 Jan 10 PM

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true); // ✅ voting open
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      setIsLive(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='homevotesection'>

      <h1 className='votebtnh1'>VOTE SECTION</h1>

      <div className="timerBox">
        <div><span>{timeLeft.days}</span><p>Days</p></div>
        <div><span>{timeLeft.hours}</span><p>Hours</p></div>
        <div><span>{timeLeft.minutes}</span><p>Min</p></div>
        <div><span>{timeLeft.seconds}</span><p>Sec</p></div>
      </div>

      <span className='btn'>
        <button
          className='Votepageshow'
          disabled={!isLive}   // ✅ only enable when timer = 0
          onClick={() => navigate('/Votesectiondiv')}
        >
          {isLive ? "GO TO VOTE" : "VOTING NOT STARTED"}
        </button>
      </span>

    </div>
  )
}

export default Votebtn
