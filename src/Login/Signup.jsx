import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import { API_URL } from "../config";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentnum, setEnrollmentnum] = useState("");
  const [googleVerified, setGoogleVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    const user = jwtDecode(credentialResponse.credential);
    setName(user.name);
    setEmail(user.email);
    setGoogleVerified(true);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
const regex = /^MGCU(2022|2023|2024|2025)CSIT30\d{2}$/;

if (!regex.test(enrollmentnum)) {
  return setError("Invalid Enrollment Number format");
}

    if (!googleVerified) {
      return setError("Please verify with Google first");
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, enrollmentnum }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("Signup successful");
        navigate("/login");
      } else {
        alert(data.message); // 🔥 notification
        setError(data.message);
      }
    } catch {
      setError("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>

        {!googleVerified && (
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError("Google Login Failed")}
          />
        )}

        <input placeholder="Name" value={name} disabled />

        <input placeholder="Email" value={email} disabled />

        <input
          placeholder="Enrollment Number"
          value={enrollmentnum}
          onChange={(e) => setEnrollmentnum(e.target.value.toUpperCase())}
          required
        />

        <input
          placeholder="Create Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="loginbutton" disabled={!googleVerified}>
          Complete Signup
        </button>

        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>

      </form>
    </div>
  );
};

export default Signup;
