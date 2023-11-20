import React from 'react';
import { FiGlobe, FiMap, FiUsers } from 'react-icons/fi'; // Import icons
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Welcome to Yatrik, your ultimate travel companion!</p>
        <div className="info-cards">
          <div className="info-card">
            <FiGlobe size={48} color="#ff8000" />
            <h3>Global Presence</h3>
            <p>Explore destinations worldwide with Yatrik.</p>
          </div>
          <div className="info-card">
            <FiMap size={48} color="#00a8e8" />
            <h3>Exciting Destinations</h3>
            <p>Discover the most exciting travel spots.</p>
          </div>
          <div className="info-card">
            <FiUsers size={48} color="#33cc33" />
            <h3>Experienced Team</h3>
            <p>Our team of experts ensures your unforgettable journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
