import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const Prologin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ correct place

    try {
      const res = await fetch(`${API_URL}/api/auth/prologin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      // ✅ save pro user
      localStorage.setItem("proUser", JSON.stringify(data.user));

      // ✅ also save as normal user (for Login.jsx)
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.user.name || "Authority",
          email: data.user.email,
          enrollmentnum: "AUTHORITY",
          Imgsrc: "/images/fresher.jpg",
        })
      );

      navigate("/"); // login page ya home

    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Authorities Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="loginbutton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Prologin;
