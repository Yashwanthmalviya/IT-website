// src/pages/Services.jsx
import React from "react";

const Services = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Our Services</h1>
        <p>Discover the services we offer to drive your business forward.</p>
      </header>
      <section className="container">
        <div className="service">
          <h2>Web Development</h2>
          <p>
            We build responsive and high-performance websites to help you
            engage with your customers.
          </p>
        </div>
        <div className="service">
          <h2>Mobile App Development</h2>
          <p>
            Our mobile solutions ensure seamless connectivity and user
            engagement on all platforms.
          </p>
        </div>
        <div className="service">
          <h2>Cloud Services</h2>
          <p>
            We offer scalable and secure cloud solutions to optimize your
            business operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
