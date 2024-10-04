import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-gray-700">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <p>&copy; {new Date().getFullYear()} FLUX.1-dev. All rights reserved.</p>
          <a 
            href="https://github.com/M-YasirGhaffar/text-to-image-generation-full-stack" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#008080] transition duration-200 flex items-center"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
            <span>M-YasirGhaffar</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
