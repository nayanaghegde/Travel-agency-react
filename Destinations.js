import React from "react";
import "./Destinations.css";

const Destinations = () => {
  const destinations = [
    {
      name: "Paris, France",
      description: "Experience the romance of Paris with its iconic landmarks.",
      image: "https://tse3.mm.bing.net/th?id=OIP.cew5Ub5da1dvZ1HzC9g2_QHaF-&pid=Api&P=0&h=180"
    },
    {
      name: "Bali, Indonesia",
      description: "Enjoy the tropical paradise with pristine beaches.",
      image: "https://tse2.mm.bing.net/th?id=OIP.lWK0WWcGQ4dnNiUy4BSZ2gHaJ4&pid=Api&P=0&h=180"
    },
    {
      name: "Tokyo, Japan",
      description: "Explore the vibrant culture, technology, and ancient temples.",
      image: "https://tse2.mm.bing.net/th?id=OIP.Xya9mEclupVn4KA2rdQdBAHaFK&pid=Api&P=0&h=180"
    },
    {
      name: "New York, USA",
      description: "Discover the charm of the Big Apple with its attractions.",
      image: "https://tse2.mm.bing.net/th?id=OIP.-U_wd4TJdvL6ukd09wzqNwHaEs&pid=Api&P=0&h=180"
    },
    {
      name: "Dubai, UAE",
      description: "Experience luxury shopping, modern architecture, and desert adventures.",
      image: "https://tse3.mm.bing.net/th?id=OIP.7TGrX5UdzRHQL_VZRgGQ-gHaFj&pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className="destinations-container">
      <h2>Explore Our Top Destinations 🌍</h2>
      <div className="destination-grid">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card">
            <img
              src={dest.image}
              alt={dest.name}
              className="destination-image"
              onError={(e) => e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"}
            />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
