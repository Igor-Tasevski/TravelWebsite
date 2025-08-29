import React from 'react';

const HowItWorks = () => {
    return (
        <div className="bg-gray-50 pt-24 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
            {/* Heading Section */}
            <h1 className="text-4xl font-bold text-center mb-8 text-green-600">How It Works</h1>
            <p className="text-lg text-center mb-12">Welcome to BKRVG, your go-to travel platform! Here's a simple guide on how to make the most of your experience with us:</p>

            {/* Step 1: Discover Unique Destinations */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">1. Discover Unique Destinations and Accommodations</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    We offer personalized recommendations for travel destinations based on your preferences. Whether you’re seeking a quiet retreat in nature or an adventure in a bustling city, we’ve got options to suit every taste. Explore unique accommodations, from cozy mountain cabins to beachfront villas, that offer a true local experience.
                </p>
            </div>

            {/* Step 2: Experience Local Activities */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">2. Experience Local Activities</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    Want to experience a new destination like a local? Our platform connects you with residents offering one-of-a-kind activities. From guided nature hikes to cooking classes with local chefs, you can book immersive experiences that give you a deeper connection to the place you’re visiting.
                </p>
            </div>

            {/* Step 3: Indulge in Masterful Gastronomy */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">3. Indulge in Masterful Gastronomy</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    We believe in the power of food to bring people together. Discover local restaurants, food tours, and even street food experiences prepared by passionate chefs. Book a table, get recommendations, and savor authentic flavors that tell the story of the place.
                </p>
            </div>

            {/* Step 4: Support Sustainability */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">4. Support Sustainability</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    We’re committed to sustainability. Our platform promotes eco-friendly travel options and encourages responsible tourism. By choosing green accommodations, sustainable activities, and supporting local businesses, you can travel with a positive impact on the environment.
                </p>
            </div>

            {/* Step 5: How to Get Started */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">5. How to Get Started</h2>
                <ol className="text-lg leading-relaxed text-gray-700 list-decimal list-inside">
                    <li><strong>Sign Up</strong>: Create an account to start exploring personalized suggestions tailored to your preferences.</li>
                    <li><strong>Browse & Book</strong>: Search for destinations, accommodations, activities, and dining options based on your interests. Make bookings directly through our platform.</li>
                    <li><strong>Enjoy</strong>: Get ready for a seamless travel experience with easy bookings, local experiences, and the joy of discovering something new!</li>
                </ol>
            </div>

            {/* Step 6: Have Questions? */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">6. Have Questions?</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    If you ever need assistance, our customer service team is here to help. You can reach out to us through our "Contact Us" page for any inquiries.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Choose Us?</h2>
                <ul className="text-lg leading-relaxed text-gray-700 space-y-4">
                    <li><strong>Curated Experiences:</strong> We bring you only the best recommendations from local experts.</li>
                    <li><strong>Eco-friendly Travel:</strong> We prioritize sustainability, ensuring that your adventures leave a positive impact on the environment.</li>
                    <li><strong>Unique Connections:</strong> Our platform connects you with local residents and authentic experiences you won’t find anywhere else.</li>
                </ul>
            </div>
        </div>
    );
};

export default HowItWorks;
