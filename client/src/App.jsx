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
    const storedImages = JSON.parse(
      localStorage.getItem("generatedImages") || "[]"
    );
    setGeneratedImages(storedImages);
  }, []);

  const addGeneratedImage = (image) => {
    const newImages = [image, ...generatedImages].slice(0, 20); // Keep only the last 20 images
    setGeneratedImages(newImages);
    localStorage.setItem("generatedImages", JSON.stringify(newImages));
  };

  const openFullScreenImage = (image) => {
    setFullScreenImage(image);
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
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
      <FullScreenImage image={fullScreenImage} onClose={closeFullScreenImage} />
    </div>
  );
}

export default App;
