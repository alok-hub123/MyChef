import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">About Us</h5>
            <p className="mt-2 text-sm">We are committed to providing the best recipes.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Genrator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Recipe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kitchen Essential</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Contact Us</h5>
            <p className="mt-2 text-sm">Email: recipe@example.com</p>
            <p className="text-sm">Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 Recipe Finder and Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;