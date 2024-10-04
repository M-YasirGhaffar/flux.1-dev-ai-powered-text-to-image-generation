import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

const FullScreenImage = ({ image, onClose, onDelete }) => {
  if (!image) return null;

  const handleDelete = (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (confirmDelete) {
      onDelete(image.id);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="fixed top-5 right-5 text-white rounded-full p-1 text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button> 
          <img
            src={image.src}
            alt={image.prompt}
            className="max-w-full max-h-[80vh] object-contain mx-auto"
          /> 
          <div className="text-center mt-4 space-y-2 sm:space-y-0 sm:flex sm:justify-center sm:items-center">
            <p className="text-white font-sans">{image.prompt}</p>
            <div className="flex justify-center items-center sm:ml-4 space-x-4">

              <a
                href={image.src}
                download={image.prompt.length > 10 ? image.prompt.substring(0, 10) + '...' : image.prompt}
                className="text-white hover:text-gray-300"
                onClick={(e) => e.stopPropagation()} // Prevent event propagation to modal backdrop
              >
                <FontAwesomeIcon icon={faDownload} className="text-2xl" />
              </a>

              <button
                onClick={handleDelete}
                className="text-white hover:text-red-400 focus:outline-none"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FullScreenImage;
