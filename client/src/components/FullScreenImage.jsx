import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullScreenImage = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div className="relative max-w-4xl w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          >
            &times;
          </button>
          <img
            src={image.src}
            alt={image.prompt}
            className="max-w-full max-h-[90vh] object-contain mx-auto"
          />
          <p className="text-white text-center mt-4">{image.prompt}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FullScreenImage;