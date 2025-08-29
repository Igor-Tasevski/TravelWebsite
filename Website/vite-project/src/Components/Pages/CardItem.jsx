import { useNavigate } from "react-router-dom";

const CardItem = ({ id, src, text, label, authToken, handleCardClick }) => {
  const handleClick = () => {
    if (authToken) {
      handleCardClick(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group cursor-${authToken ? 'pointer' : 'default'}`}
    >
      <figure className="relative">
        <img
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-300"
          alt={label}
          src={src}
        />

        {/* Show message only if not authenticated */}
        {!authToken && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 text-white text-lg font-semibold transition-opacity duration-300">
            You need to sign up for reservation
          </div>
        )}

        <span className="absolute top-2 left-2 bg-black bg-opacity-60 text-white py-1 px-3 rounded-full text-sm font-semibold">
          {label}
        </span>
      </figure>
      <div className="p-6">
        <h5 className="text-lg font-semibold text-gray-800">{text}</h5>
      </div>
    </div>
  );
};

export default CardItem;
