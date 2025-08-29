import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importing Leaflet for custom icons
import 'leaflet/dist/leaflet.css';

const RestaurantDetail = () => {
  // Sample dynamic data based on the restaurant ID
  const restaurantData = {
    1: {
      name: "Bella Voda",
      description: "A beautiful place offering traditional Macedonian dishes.",
      images: [
        "/images/Restaurant-BellaVoda_1.jpg",
        "/images/Restaurant-BellaVoda_2.jpg",
        "/images/Restaurant-BellaVoda_3.jpg"
      ],
      location: { lat: 41.77876, lng: 21.75633 },
      popupText: "Bella Voda is located right on the shore of Lake Mladost - Veles, offering a beautiful view and a pleasant atmosphere for all visitors.",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Bela Voda – Lake Veles, Veles</h2>
          <p className="text-gray-700 mb-4">
            Restaurant Bela Voda is located right on the shore of Lake Mladost - Veles, offering a beautiful view and a pleasant atmosphere for all visitors.
          </p>
          <p className="text-gray-700 mb-4">
            The spacious open terrace and the platform right next to the water are ideal for enjoying the fresh air and the beauty of the lake.
          </p>
          <p className="text-gray-700 mb-4">
            At the restaurant, you can try traditional Macedonian dishes and grill specialties, prepared with fresh, local ingredients. The menu also includes a selection of international dishes that cater to different tastes.
          </p>
          <p className="text-gray-700 mb-4">
            In addition to the restaurant, the complex also features a lunch bar offering light meals and refreshing drinks.
          </p>
          <p className="text-gray-700 mb-4">
            Bela Voda is also recognized as a place where wedding celebrations and other events are organized, thanks to its spacious and beautiful ambiance.
          </p>
          <p className="text-gray-700 mb-4">
            This is the perfect destination for relaxation by nature, family gatherings, or romantic moments by the lake, with attentive service and quality food.
          </p>
        </>
      )
    },
    2: {
      name: "Markova Cesma",
      description: "The perfect place for all lovers of traditional Macedonian cuisine and authentic ambiance.",
      images: [
        "/images/Restaurant-MarkovaCesma_1.jpg",
        "/images/Restaurant-MarkovaCesma-2.jpg",
        "/images/Restaurant-MarkovaCesma-3.jpg"
      ],
      location: { lat: 41.36537, lng: 21.59022 },
      popupText: "Restaurant Markova Cheshma in the vicinity of Prilep",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Markova Cesma – Prilep</h2>
          <p className="text-gray-700 mb-4">
            Located in the picturesque nature of Prilep, Restaurant "Markova Cheshma" is the perfect place for all lovers of traditional Macedonian cuisine and authentic ambiance.
          </p>
          <p className="text-gray-700 mb-4">
            Restaurant "Markova Cheshma" is known for its rich offer of traditional Macedonian cuisine, with a special emphasis on barbecue specialties. Guests can enjoy the beautiful barbecue in a pleasant atmosphere with their loved ones. <br />
            - Grilled meat: kebabs, burgers, neck, ribs and other meat specialties
            - Traditional Macedonian appetizers and salads
            - Homemade side dishes and side dishes
          </p>
        </>
      )
    },
    3: {
      name: "Fotka Skopje",
      description: "A restaurant in the heart of Skopje, operating for more than 30 years.",
      images: [
        "/images/Restaurant-FotkaSkopje1.jpg",
        "/images/Restaurant-FotkaSkopje2.jpg",
        "/images/Restaurant-FotkaSkopje3.jpg",
      ],
      location: { lat: 42.00188, lng: 21.39915 },
      popupText: "Restaurant Fotka Skopje-Karposh",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Fotka Skopje – Karposh</h2>
          <p className="text-gray-700 mb-4">
            Here you can taste Shtip pastrami in a good combination with red wine.
          </p>
          <p className="text-gray-700 mb-4">
            Specialties include homemade sausage, beef brisket, smoked ribs, and more.
          </p>
          <p className="text-gray-700 mb-4">
            From ready-made dishes, you can find cabbage rolls, oven-baked ribs, baked beans, veal muscle, country meat, knee in cabbage leaves, and more.
          </p>
        </>
      )
    },
    4: {
      name: "Restaurant Fratelis Viziana: Klechovce Village",
      description: "The Fratellis Viziana fish restaurant is located near the Viziana spring, in a beautiful setting built like a ranch with beautiful horticultural landscaping.",
      images: [
        "/images/Restaurant-FratelisViziana-Kumanovo_1.jpg",
        "/images/Restaurant-FratelisViziana-Kumanovo_2.jpg",
        "/images/Restaurant-FratelisViziana-Kumanovo_3.jpg"
      ],
      location: { lat: 42.13233, lng: 21.86597 },
      popupText: "Fratelis Viziana:Fish Restaurant in the village of Klechovce-Kumanovo",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Fish Restaurant Vratelis Viziana – Kumanovo</h2>
          <p className="text-gray-700 mb-4">
            Today we are taking you to the village of Klechovce, which is located in the vicinity of Mlado Nagoricane or about a half-hour drive from Kumanovo.
          </p>
          <p className="text-gray-700 mb-4">
            As a fish restaurant, the most famous specialties here are cemented catfish and carp, as well as grilled white trout.
          </p>
          <p className="text-gray-700 mb-4">
            For people who love springtime and greenery, this destination will seem like a true paradise on earth.
          </p>
        </>
      )
    },
    5: {
      name: "Restaurant Manastir Berovo",
      description: "In a great ambiance and with various traditional specialties, here you can enjoy delicious food made from freshly picked fruits and vegetables.",
      images: [
        "/images/Restaurant-ManastirBerovo_1.jpg",
        "/images/Restaurant-ManastirBerovo_2.jpg",
        "/images/Restaurant-ManastirBerovo_3.jpg",

      ],
      location: { lat: 41.70098, lng: 22.85880 },
      popupText: "The 'Manastir' restaurant, which is part of the Manastir hotel, can also be enjoyed by guests who are not staying there.",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Manastir-Berovo</h2>
          <p className="text-gray-700 mb-4">
            The Maleshevo region will never bore you in terms of the delicious food that you can combine with the clean air, silence, and peace offered by the mountain heights.
          </p>
          <p className="text-gray-700 mb-4">
            The uniqueness of the restaurant is that it serves organic traditional specialties such as: monastery cheese, kachamak with klisi, Malesevo pan, makalo in kokla bread, zelnik, shepherd's salad and many other specialties.
          </p>

        </>
      )
    },
    6: {
      name: "Restaurant Kostence Silevo",
      description: "The restaurant is located in the village of Smilevo in picturesque nature. In front of the restaurant, guests have parking space, and right next to the parking lot is the memorial park of Dame Gruev.",
      images: [
        "/images/Restaurant-KostenceSmilevo_1.jpg",
        "/images/Restaurant-KostenceSmilevo_2.jpg",
        "/images/Restaurant-KostenceSmilevo_3.jpg",

      ],
      location: { lat: 41.15166, lng: 21.11347 },
      popupText: "",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Kostence - Smilevo</h2>
          <p className="text-gray-700 mb-4">
            The restaurant serves local specialties, and coffee is served in cups with the image of Dame Gruev.
          </p>
          <p className="text-gray-700 mb-4">
            Specialties to try: Komat pod sach with crust or zelnik, pitulici with garlic, cheese, cottage cheese, rib pod sach, Makedonka, snails, wafer with spices, wild meat sausages, fish, shopska, beaten cheese.
          </p>

        </>
      )

    },

    7: {

      name: "Restaurant Sharrs's Paradise",
      description: "Its name comes from the Shar Mountain, which is known for its natural beauty. The restaurant offers a pleasant atmosphere and is an excellent choice for family lunches, romantic dinners or group celebrations.",
      images: [
        "/images/Restaurant-SarsParadise-Tetovo_1.jpg",
        "/images/Restaurant-SarsParadise-Tetovo_2.jpg",
        "/images/Restaurant-SarsParadise-Tetovo_3.jpg",

      ],
      location: { lat: 42.01198, lng: 20.91938 },
      popupText: "",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sharr's Paradise - village of Gajre, Tetovo</h2>
          <p className="text-gray-700 mb-4">
            Sharr's Paradise's menu includes a variety of dishes, with an emphasis on fresh salads and perfectly prepared fish. Other popular dishes include mixed grill, chicken, steaks, and traditional Macedonian specialties.
          </p>
          <p className="text-gray-700 mb-4">
            Guests often describe it as a peaceful and pleasant place with friendly staff and a pleasant atmosphere.
          </p>
          <p className="text-gray-700 mb-4">
            If you are looking for a restaurant with a beautiful view, delicious food, and a cozy atmosphere, Sharr's Paradise is a great choice.
          </p>
        </>
      )

    },

    8: {

      name: "Restaurant 'Domaksimska Kuca' - Velestovo, Ohrid",
      description: "The restaurant is known for its hospitality and quality of food, making it a favorite choice for locals and tourists.",
      images: [
        "/images/Restaurant-DomakinskaKuka-Ohrid_1.jpg",
        "/images/Restaurant-DomakinskaKuka-Ohrid_2.jpg",
        "/images/Restaurant-DomakinskaKuka-Ohrid_3.jpg",

      ],
      location: { lat: 41.08394, lng: 20.82793 },
      popupText: "",
      detailedDescription: (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sharr's Paradise - village of Gajre, Tetovo</h2>
          <p className="text-gray-700 mb-4">
            The restaurant "Domaksimska kuka" is located in the village of Velestovo, near Ohrid, and is known for its traditional Macedonian cuisine and authentic atmosphere.
          </p>
          <p className="text-gray-700 mb-4">
            Situated in a picturesque location, the restaurant offers a beautiful view of Lake Ohrid, making it a popular choice for weddings, family celebrations, and other festivities.
          </p>
          <p className="text-gray-700 mb-4">
            The menu of "Domaksimska kuca" includes a wide range of Macedonian dishes, such as: <br />
            - Rakija and domestic wines <br />
            - Meat specialties (lamb, pork, chicken) <br />
            - Traditional side dishes and salads <br />
            - Homemade pastries and desserts
          </p>
        </>
      )

    },














  };


  const { id } = useParams();
  const restaurant = restaurantData[id];

  // Custom red icon for the marker
  const redIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png", // Default red marker
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon where it should be anchored
    popupAnchor: [1, -34], // Popup position relative to the icon
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Shadow image (optional)
    shadowSize: [41, 41] // Size of the shadow
  });

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto"> {/* This wraps the content to match navbar width */}
        {restaurant && (
          <>
            <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
            <p className="mb-6">{restaurant.description}</p>

            {/* Displaying images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {restaurant.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Restaurant ${restaurant.name} Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>

            {/* Restaurant description section */}
            <section className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg text-left">
              {restaurant.detailedDescription}
            </section>

            {/* Map for the selected restaurant */}
            <div className="mt-8" style={{ height: '400px' }}>
              <MapContainer
                center={[restaurant.location.lat, restaurant.location.lng]}  // Focus on the selected restaurant
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[restaurant.location.lat, restaurant.location.lng]}
                  icon={redIcon} // Ensures the red icon is used
                >
                  <Popup>
                    <strong>{restaurant.name}</strong><br />
                    {restaurant.popupText}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
