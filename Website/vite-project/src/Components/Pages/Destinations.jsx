import React, { useState } from 'react';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';


  

  const Destinations = ({ authToken }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (authToken) {
      navigate(`/destination/${id}`);  // Navigate to DestinationDetail
    } else {
      // Optionally redirect to login/signup if not authenticated
      navigate('/SignUp');
    }
  };

 

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <h1 className="text-4xl text-center font-bold mb-8 text-gray-800">Explore Our Destinations</h1>
     
      <Cards authToken={authToken} handleCardClick={handleCardClick} />
    </div>
  );
};

export default Destinations;
