import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "destinations":
        return <Destinations />;
      case "booking":
        return <Booking />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
