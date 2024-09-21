import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic (e.g., Firebase sign out)
    navigate("/");
  };

  return (
    <div className="home-container">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h1 className="welcome-heading">Welcome to the Home Page</h1>
      
      <footer className="footer">
        <div className="footer-section about">
          <h3>About Deakin</h3>
        </div>
        <div className="footer-section connect">
          <h3>Connect with Us</h3>
        </div>
        <div className="footer-section social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
