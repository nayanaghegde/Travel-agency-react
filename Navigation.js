import React from "react";
import "./Navigation.css";

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">TravelMate ✈️</h1>
      <div className="nav-links">
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("destinations")}>Destinations</button>
        <button onClick={() => setCurrentPage("booking")}>Booking</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navigation;
