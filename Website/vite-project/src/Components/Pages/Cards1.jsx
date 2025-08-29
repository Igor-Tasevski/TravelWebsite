import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardItem1 from './CardItem1';

const Cards1 = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Navigate to the restaurant detail page with the id
    navigate(`/RestaurantDetail/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card Items */}
        <CardItem1
          src="images/Restaurant-BellaVoda.jpg"
          text="From the tender juiciness of pork to the richness of beef and salmon, each bite, paired with a fine wine and freshly baked bread, brings together the best of comfort food in one perfect meal."
          label="Food"
          onClick={() => handleCardClick('1')}
        />
        <CardItem1
          src="images/Restaurant-MarkovaCesma.jpg"
          text="Whether it's the earthy taste of roasted vegetables or the bright notes of a citrus-infused drink, the right wine elevates every bite, turning simple ingredients into a truly memorable dining experience."
          label="Food"
          onClick={() => handleCardClick('2')}
        />
        <CardItem1
          src="images/Restaurant-FotkaSkopje.jpg"
          text="The earthy richness of vegetables, when paired with a robust wine and a light, refreshing drink, creates a balance of flavors that is as satisfying as it is simple."
          label="Food"
          onClick={() => handleCardClick('3')}
        />
        <CardItem1
          src="images/Restaurant-Fratelis.jpg"
          text="By the peaceful fish pond, the air is filled with the earthy scent of nature. A juicy beef steak sizzles nearby, perfectly paired with a glass of bold red wine—an idyllic moment of simple pleasures."
          label="Food"
          onClick={() => handleCardClick('4')}
        />
        <CardItem1
          src="images/Restaurant-ManastirBerovo.jpg"
          text="The Maleshevo region will never bore you in terms of the delicious food that you can combine with the clean air, silence, and peace offered by the mountain heights."
          label="Food"
          onClick={() => handleCardClick('5')}
        />
        <CardItem1
          src="images/Restaurant-KostenceSmilevo.jpg"
          text="The restaurant is located in the village of Smilevo in picturesque nature. "
          label="Food"
          onClick={() => handleCardClick('6')}
        />
        <CardItem1
          src="images/Restaurant-SarsParadise-Tetovo.jpg"
          text="Sharr's Paradise's menu includes a variety of dishes, with an emphasis on fresh salads and perfectly prepared fish. Other popular dishes include mixed grill, chicken, steaks, and traditional Macedonian specialties."
          label="Food"
          onClick={() => handleCardClick('7')}
        />
        <CardItem1
          src="images/Restaurant-DomakinskaKuka-Ohrid.jpg"
          text="Situated in a picturesque location, the restaurant offers a beautiful view of Lake Ohrid, making it a popular choice for weddings, family celebrations, and other festivities."
          label="Food"
          onClick={() => handleCardClick('8')}
        />
      </div>
    </div>
  );
};

export default Cards1;
