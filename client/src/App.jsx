import React, { useState, useEffect } from "react";
import ImageGenerator from "./components/ImageGenerator";
import About from "./components/About";
import Usage from "./components/Usage";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FullScreenImage from "./components/FullScreenImage";

function App() {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("generatedImages") || "[]");
    setGeneratedImages(storedImages);
  }, []);

  const addGeneratedImage = (image) => {
    const newImages = [image, ...generatedImages].slice(0, 20);
    setGeneratedImages(newImages);
    localStorage.setItem("generatedImages", JSON.stringify(newImages));
  };

  const openFullScreenImage = (image) => {
    setFullScreenImage(image); // Update state with the clicked image
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null); // Clear the fullScreenImage state
  };

  const onDelete = (imageId) => {
    const updatedImages = generatedImages.filter((image) => image.id !== imageId);
    setGeneratedImages(updatedImages);
    localStorage.setItem("generatedImages", JSON.stringify(updatedImages));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <ImageGenerator addGeneratedImage={addGeneratedImage} />
        
        <Gallery
          images={generatedImages}
          openFullScreenImage={openFullScreenImage}
        />
        
        <About />
        <Usage />
      </main>
      <Footer />


      {fullScreenImage && (
        <FullScreenImage
          image={fullScreenImage}
          onClose={closeFullScreenImage}
          onDelete={onDelete} 
        />
      )}
    </div>
  );
}

export default App;
