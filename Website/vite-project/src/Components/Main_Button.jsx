import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Main_Button = () => {
  return (
    <Link to="/destinations"> 
      <button className="bg-transparent border-2 border-white text-white px-9 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
        {/* Get Started text */}
        <span className="h-5 w-5 px-1">Get Started</span>
      </button>
    </Link>
  );
};

export default Main_Button;
