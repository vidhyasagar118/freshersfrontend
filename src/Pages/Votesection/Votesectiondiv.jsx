import React, { useEffect, useState } from "react";
import "./Votesection.css";
import { API_URL } from "../../config";

const Votesectiondiv = () => {
  const [students, setStudents] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLive, setIsLive] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ INDIA TIME SAFE
  const targetDate = new Date("March 18, 2026 21:30:00");

  /* ================= TIMER ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setIsLive(true);
        clearInterval(timer);
      } else {
        setIsLive(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ================= LOAD STUDENTS ================= */
  const loadStudents = async () => {
    try {
      const res = await fetch(`${API_URL}/students`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= CHECK VOTE ================= */
  const checkVote = async () => {
    if (!user?.email) return;

    try {
      const res = await fetch(`${API_URL}/vote/status/${user.email}`);
      const data = await res.json();
      setHasVoted(data.hasVoted);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= USE EFFECT ================= */
  useEffect(() => {
    loadStudents();
    if (user) {
      checkVote();
    }
  }, [user]);

  /* ================= VOTE FUNCTION ================= */
  const vote = async (enrollmentnum) => {
    if (!user?.email) return alert("Please login to vote!");
    if (!isLive) return alert("Voting has not started yet!");

    try {
      const res = await fetch(`${API_URL}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          enrollmentnum,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return alert(data.message);
      }

      alert("Vote Successful ✅");
      setHasVoted(true);
      loadStudents();
    } catch (err) {
      alert("Vote failed ❌");
    }
  };

  return (
    <div className="Votesectionmaindiv">
      <h1 className="voteTitle">VOTE YOUR FAVORITE</h1>

      {/* ✅ DEBUG (optional remove later) */}
      {/* <p>Voting Status: {isLive ? "LIVE" : "NOT STARTED"}</p> */}

      <div className="Votesectiondiv">
        {students.map((s) => (
          <div className="studentCard" key={s._id}>
            <img
              src={`/student2025img/${s.enrollmentnum}.jpg`}
              alt={s.name}
              onError={(e) => (e.target.src = "/default.jpeg")}
            />

            <h3>{s.name}</h3>
            <p>Enrollment: {s.enrollmentnum}</p>
            <p className="votes">Votes: {s.votes}</p>

            <button
              className="voteBtn"
              disabled={!user || hasVoted || !isLive}
              onClick={() => vote(s.enrollmentnum)}
            >
              {!user
                ? "Login to Vote"
                : !isLive
                ? "Voting Not Started"
                : hasVoted
                ? "Already Voted"
                : "Vote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votesectiondiv;