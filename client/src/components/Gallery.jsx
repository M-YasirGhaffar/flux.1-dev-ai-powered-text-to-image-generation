import React from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ images, openFullScreenImage }) => {
  return (
    <div className="max-w-screen-xl w-full md:w-3/4 mx-auto px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[#008080] text-center">Visual Collection</h1>
      
      {images.length === 0 ? (
        <p className="text-gray-300 text-xl text-center font-sans">No images generated yet. Start creating!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform ${
                index % 7 === 0 ? 'col-span-2 row-span-2' : 'col-span-1'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={image.src}
                alt={image.prompt}
                className="w-full h-full object-cover object-center cursor-pointer"
                onClick={() => openFullScreenImage(image)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm line-clamp-2">{image.prompt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
