import React from 'react';
import CardItem from './CardItem';
import cardData from '../Pages/cardData'
const Cards = ({ authToken, handleCardClick }) => {


  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            {...card}

            authToken={authToken}
            handleCardClick={handleCardClick} // Pass handleCardClick here

          />
        ))}
      </div>
    </div>
  );
};

export default Cards;