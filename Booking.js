import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);

  const destinations = [
    {
      name: "Paris, France",
      price: 1200,
      days: 5,
      accommodation: "4-star Hotel",
      inclusions: "Flights, Breakfast, City Tour",
      description: "Experience the romance of Paris with its iconic landmarks and cuisine.",
      image: "https://images.unsplash.com/photo-1522093007474-14a9d74e82e2" // Paris image
    },
    {
      name: "Bali, Indonesia",
      price: 950,
      days: 7,
      accommodation: "Beach Resort",
      inclusions: "Flights, All Meals, Sightseeing",
      description: "Enjoy the tropical paradise with pristine beaches and cultural landmarks.",
      image: "https://images.unsplash.com/photo-1559622214-0a4614ea3e1e" // Bali image
    },
    {
      name: "Tokyo, Japan",
      price: 1500,
      days: 6,
      accommodation: "Luxury Hotel",
      inclusions: "Flights, Breakfast, City Tour, Bullet Train Ride",
      description: "Explore the vibrant culture, futuristic technology, and ancient temples of Tokyo.",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" // Tokyo image
    },
    {
      name: "New York, USA",
      price: 1800,
      days: 4,
      accommodation: "Luxury Suite",
      inclusions: "Flights, City Tour, Statue of Liberty Cruise",
      description: "Discover the charm of the Big Apple with its world-famous attractions.",
      image: "https://images.unsplash.com/photo-1544465544-d35839c1e44f" // New York image
    },
    {
      name: "Dubai, UAE",
      price: 1100,
      days: 5,
      accommodation: "5-star Hotel",
      inclusions: "Flights, Desert Safari, Dhow Cruise",
      description: "Experience luxury shopping, ultramodern architecture, and desert adventures.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077" // Dubai image
    }
  ];

  const handleBooking = () => {
    if (!selectedPlace || !date) {
      alert("Please select a place and date!");
      return;
    }

    const placeDetails = destinations.find(
      (place) => place.name === selectedPlace
    );

    const totalPrice = placeDetails.price * travelers;

    setBookingDetails({
      place: selectedPlace,
      date,
      travelers,
      price: totalPrice,
      ...placeDetails,
    });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Dream Vacation 🌍</h2>

      <div className="booking-form">
        <label>Select Destination:</label>
        <select
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
        >
          <option value="">Choose a place</option>
          {destinations.map((dest, index) => (
            <option key={index} value={dest.name}>
              {dest.name}
            </option>
          ))}
        </select>

        <label>Number of Travelers:</label>
        <input
          type="number"
          min="1"
          value={travelers}
          onChange={(e) => setTravelers(Number(e.target.value))}
        />

        <label>Travel Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleBooking}>Book Now</button>
      </div>

      {bookingDetails && (
        <div className="booking-summary">
          <h3>Booking Summary ✈️</h3>
          <img src={bookingDetails.image} alt={bookingDetails.place} className="destination-image" />
          <p><strong>Destination:</strong> {bookingDetails.place}</p>
          <p><strong>Date:</strong> {bookingDetails.date}</p>
          <p><strong>Travelers:</strong> {bookingDetails.travelers}</p>
          <p><strong>Price:</strong> ${bookingDetails.price} (Total)</p>
          <p><strong>Accommodation:</strong> {bookingDetails.accommodation}</p>
          <p><strong>Inclusions:</strong> {bookingDetails.inclusions}</p>
          <p><strong>Description:</strong> {bookingDetails.description}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
