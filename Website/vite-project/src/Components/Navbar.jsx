import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Combine imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ authToken, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  
  const logoutAndRedirect = () => {
    handleLogout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-8">
      <div className="flex justify-between items-center">
        <span className="text-white text-4xl font-bold tracking-tight uppercase" style={{ fontFamily: 'Montserrat' }}>
          <span className="text-white">B</span>
          <span className="bg-half-green text-transparent bg-clip-text">K</span>
          <span className="text-green-500">R</span>
          <span className="bg-half-green text-transparent bg-clip-text">V</span>
          <span className="text-white">G</span>
        </span>

        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li><Link to="/" className="text-white text-lg">Home</Link></li>
          <li><Link to="/About_us" className="text-white text-lg">About Us</Link></li>
          <li><Link to="/Gastronomy" className="text-white text-lg">Gastronomy</Link></li>
          <li>
            {authToken ? (
              <button
                onClick={logoutAndRedirect}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/SignUp"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Sign Up
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="space-y-4">
            <li><Link to="/" className="text-white block text-lg">Home</Link></li>
            <li><Link to="/About_us" className="text-white block text-lg">About Us</Link></li>
            <li><Link to="/Gastronomy" className="text-white block text-lg">Gastronomy</Link></li>
            <li>
              {authToken ? (
                <button
                  onClick={logoutAndRedirect}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/SignUp"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
