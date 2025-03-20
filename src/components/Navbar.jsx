import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [username, setUsername] = useState(null);
  const location = useLocation(); // Listen to route changes

  useEffect(() => {
    // On every location change, update the username from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedUsername = storedUser ? storedUser.username : null;
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername(null);
    }
  }, [location]);

  // Display the first letter of the username if available, otherwise a default emoji
  const userIcon = username ? username.charAt(0).toUpperCase() : '👤';

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        {!username ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUsername(null);
              }}
            >
              Logout
            </button>
          </>
        )}
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
