import React from 'react';

const Sponsors = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Sponsors</h2>
        
        {/* Introduction */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We are proud to partner with some amazing sponsors who share our passion for travel, sustainability, and creating unique experiences for our community. With their support, we can continue bringing you the best travel recommendations, accommodations, local activities, and more. Here's a look at our wonderful sponsors.
        </p>

        {/* Sponsors Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example of a Sponsor */}
          <div className="flex justify-center items-center">
            <img src="/images/zitomarketi.jpeg" alt="Zito_Marketi" className="max-h-20" />
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/28ptjb4POUSvm24JkTZzWg-large.jpg" alt="Setec" className="max-h-20" />
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/Croatia_Osiguranje_(logo).jpg" alt="Croatia Osiguranje" className="max-h-20" />
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/neptun.jpeg" alt="Neptun" className="max-h-20" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Become a Sponsor</h3>
          <p className="text-lg text-gray-600 mb-6">
            Are you interested in becoming a sponsor and partnering with us to create unforgettable travel experiences? We offer unique opportunities for brands that align with our mission. 
          </p>
          <a
            href="/Contact"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Contact Us to Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
