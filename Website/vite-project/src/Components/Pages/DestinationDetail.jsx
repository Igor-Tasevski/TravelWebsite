import { useParams } from 'react-router-dom';
import Reservation from '../Pages/Reservation';
import destinationDetails from './destinationDetails';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationDetails[id];

  if (!destination) {
    return (
      <div className="text-center text-red-500 py-12">
        Destination not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {destination.title}
      </h1>

      {/* Carousel for multiple images */}
      {destination.images && destination.images.length > 0 && (
        <div className="mb-6">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            interval={5000}
            dynamicHeight={false}
            className="rounded-lg overflow-hidden"
          >
            {destination.images.map((imgSrc, index) => (
              <div key={index}>
                <img
                  src={imgSrc}
                  alt={`${destination.title} ${index + 1}`}
                  className="h-96 object-cover w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {destination.fullText && (() => {
        const lines = destination.fullText.split('\n');
        const [firstLine, ...otherLines] = lines;

        return (
          <div className="text-lg text-gray-700 mb-6 text-left">
            <p className="mb-4">{firstLine}</p>
            <ul className="list-disc list-inside">
              {otherLines.map((line, index) => (
                <li key={index} className="mb-2">{line}</li>
              ))}
            </ul>
          </div>
        );
      })()}



      {destination.extraInfo && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-gray-800">
          {destination.extraInfo.split('\n').map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
          ))}
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Make a Reservation</h2>
      <Reservation destination={destination} />
    </div>
  );
};

export default DestinationDetail;
