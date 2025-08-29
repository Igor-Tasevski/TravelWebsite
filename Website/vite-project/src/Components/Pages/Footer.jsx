import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Newsletter Section */}
        <section className="mb-8">
          <p className="text-center text-xl mb-2">Join the adventure newsletter to receive our best vacation deals</p>
          <p className="text-center text-sm mb-4">You can unsubscribe at any time</p>
          <form className="flex justify-center">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-md text-black"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Footer Sections (About Us, Contact Us, Social Media) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <ul>
              <li><Link to="/About_us" className="block mb-2 text-lg hover:text-green-500">About us</Link></li>
              <li><Link to="/how-it-works" className="block mb-2 text-lg hover:text-green-500">How it works</Link></li>
              
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul>
              <li><Link to="/Contact" className="block mb-2 text-lg hover:text-green-500">Contact</Link></li>
              <li><Link to="/Sponsors" className="block mb-2 text-lg hover:text-green-500">Sponsors</Link></li>
              <li><Link to="/destinations" className="block mb-2 text-lg hover:text-green-500">Destinations</Link></li>
              <li><Link to="/TermsOfService" className="block mb-2 text-lg hover:text-green-500">Terms of service</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <ul className='flex flex-col items-center justify-center space-y-2'>
              <li className="mb-2 flex ">
                <FontAwesomeIcon icon={faFacebook} className="mr-2 mt-2" />
                <Link to="https://www.facebook.com" target="_blank" className="text-lg hover:text-green-500">Facebook</Link>
              </li>
              <li className="mb-2 flex ">
                <FontAwesomeIcon icon={faInstagram} className="mr-2 mt-2" />
                <Link to="https://www.instagram.com" target="_blank" className="text-lg hover:text-green-500">Instagram</Link>
              </li>
              <li className="mb-2 flex ">
                <FontAwesomeIcon icon={faYoutube} className="mr-2 mt-2" />
                <Link to="https://www.youtube.com" target="_blank" className="text-lg hover:text-green-500">YouTube</Link>
              </li>
              <li className="mb-2 flex">
                <FontAwesomeIcon icon={faTwitter} className="mr-2 mt-2" />
                <Link to="https://x.com/" target="_blank" className="text-lg hover:text-green-500">Twitter</Link>
              </li>
              <li className="mb-2 flex ">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2 mt-2" />
                <Link to="https://www.linkedin.com/home" target="_blank" className="text-lg hover:text-green-500">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
