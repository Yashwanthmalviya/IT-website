// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add code to send the form data to your server/API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div>
      <header className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for more information or to request a quote.</p>
      </header>
      <section className="container">
        {submitted ? (
          <div className="contact-message">
            <h2>Thank you for reaching out!</h2>
            <p>We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
