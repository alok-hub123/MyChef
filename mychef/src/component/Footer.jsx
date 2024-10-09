import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-white py-6 relative" style={{backgroundImage:`url("/Images/lineBg.png")`}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">About Us</h5>
            <p className="mt-2 text-sm">We are committed to providing the best recipes.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="mt-2">
              <li><Link to='/' className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to='/recipe' className="text-gray-400 hover:text-white">Recipe</Link></li>
              <li><Link to='/generator' className="text-gray-400 hover:text-white">Generator</Link></li>
              <li><Link to='/tutorial' className="text-gray-400 hover:text-white">Totorial</Link></li>
              <li><Link to='/shop' className="text-gray-400 hover:text-white">Shop</Link></li>
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
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-600">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <FaYoutube size={24} />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 Recipe Finder and Generator. All rights reserved.</p>
        </div>
      </div>
      <img src="/Images/ginger.png" alt="" className=' h-[15vh] w-[10vw] absolute left-0 bottom-[2vh]' />
      <img src="/Images/potato.png" alt="" className='h-[11vh] w-[10vw] absolute right-0 bottom-0' />
    </footer>
  );
};

export default Footer;