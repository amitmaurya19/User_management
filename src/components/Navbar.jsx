import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [username, setUsername] = useState(null);
  const location = useLocation(); // Listen to route changes

  useEffect(() => {
    // Update the username from localStorage on every route change
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedUsername = storedUser ? storedUser.username : null;
    setUsername(storedUsername);
  }, [location]);

  // Display first letter of the username if available, otherwise show a default icon
  const userIcon = username ? username.charAt(0).toUpperCase() : '👤';

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="user-icon">
        <Link to="/dashboard">
          <div className="icon-circle">{userIcon}</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
