import React, { useState } from "react";
import "./Contact.css";
import { API_URL } from "../config";
const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    enrollment: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", enrollment: "", message: "" });
      } else {
        alert("Failed to send message ❌");
      }

    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="contactPage">
      <div className="contactCard">

        <div className="contactImageBox">
          <h2 className="contactName">Vidhya Sagar Kushwaha</h2>
          <p className="contactEmail">abhishekhkushwah.118@gmail.com</p>
          <p className="contactPhone">📞 6367697913</p>
        </div>

        <div className="contactFormBox">
          <h2 className="formTitle">Contact Me</h2>

          <form className="contactForm" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="formInput"
              required
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="formInput"
              required
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="enrollment"
              placeholder="Enrollment Number"
              className="formInput"
              value={form.enrollment}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              className="formTextarea"
              required
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="sendButton">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
