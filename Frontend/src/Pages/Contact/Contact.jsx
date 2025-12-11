import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="subtitle">We'd love to hear from you!</p>

        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Write your message..." required></textarea>
          </div>

          <button className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
