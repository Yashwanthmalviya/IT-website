// src/pages/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  // Dummy portfolio items (you can replace these with your actual projects)
  const portfolioItems = [
    {
      id: 1,
      title: "Project One",
      description: "A cutting-edge website solution.",
      imageUrl: "https://source.unsplash.com/400x300/?website",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A revolutionary mobile app.",
      imageUrl: "https://source.unsplash.com/400x300/?app",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Innovative cloud infrastructure.",
      imageUrl: "https://source.unsplash.com/400x300/?cloud",
    },
  ];

  return (
    <div>
      <header className="page-header">
        <h1>Portfolio</h1>
        <p>Take a look at some of our latest projects.</p>
      </header>
      <section className="container portfolio">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.imageUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
