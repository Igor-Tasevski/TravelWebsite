import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const MainButton_1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // Array of video URLs
  const videos = [
    
    
    '/videos/video-5.mp4',
    '/videos/video-6.mp4',
  ];

  // Function to open the modal and select a random video
  const openModal = () => {
    // Select a random video from the array
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setVideoUrl(randomVideo); // Set the random video URL
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl(''); // Clear the video URL when the modal is closed
  };

  return (
    <>
      <button
        className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
        onClick={openModal}
      >
        {/* Watch Trailer text */}
        <span>Watch Trailer</span>
        {/* Play icon */}
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="h-5 w-5 px-1"
        />
      </button>

      {/* Modal for video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-black p-4 rounded-lg max-w-2xl max-h-96 mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
            <video
              src={videoUrl} // Use the selected random video
              autoPlay
              controls
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainButton_1;
