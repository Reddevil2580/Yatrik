import React from 'react';
import { FiAirplay, FiMapPin, FiCamera, FiCompass } from 'react-icons/fi'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for routing
import './service.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <Link to="/travel-experience">
        <div className="service-card">
          <FiAirplay size={48} color="#ff8000" />
          <h3>Travel Experiences</h3>
          <p>Explore unique and unforgettable travel experiences.</p>
        </div>
        </Link>
        <Link to="/destination-tours" className="service-card-link">
          <div className="service-card">
            <FiMapPin size={48} color="#00a8e8" />
            <h3>Destination Tours</h3>
            <p>Discover the best destinations with our guided tours.</p>
          </div>
        </Link>
        <Link to="/photography-tours" className="service-card-link">
          <div className="service-card">
            <FiCamera size={48} color="#33cc33" />
            <h3>Photography Tours</h3>
            <p>Capture the beauty of your travels with our photography tours.</p>
          </div>
        </Link>
        <Link to="/custom-packages" className="service-card-link">
          <div className="service-card">
            <FiCompass size={48} color="#ff6666" />
            <h3>Estimate your budget</h3>
            <p>Create your own personalized travel plan and let us Estimate your budget.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
