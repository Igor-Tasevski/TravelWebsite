import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10">
        <section className="flex space-x-12">
          {/* Contact Form Section */}
          <div className="w-2/3">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">Contact us, and we will respond within 48 hours</p>

            <form className="space-y-6">
              {/* Name and Surname Row */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="fname" className="block text-lg font-medium text-gray-700">Name</label>
                  <input type="text" id="fname" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your Name" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastname" className="block text-lg font-medium text-gray-700">Surname</label>
                  <input type="text" id="lastname" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your Surname" />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="telephone" className="block text-lg font-medium text-gray-700">Phone</label>
                  <input type="tel" id="telephone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone" />
                </div>
              </div>

              {/* Message Section */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea id="message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here" rows="4" />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-1/3">
            <h2 className="text-2xl font-semibold text-blue-600">Contact Info</h2>
            <p className="mt-4"><strong>Address:</strong> Pero Nakov 122a, 1047 Skopje-Gazi Baba</p>
            <p className="mt-2"><strong>Phone:</strong> 02/3055-222</p>
            <p className="mt-2"><strong>Email:</strong> online@travelbrkvg.mk</p>
            <p className="mt-2"><strong>Work Time:</strong> Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
