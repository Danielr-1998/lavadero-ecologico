import React, { useState } from "react";

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/images/beautiful-car-interior-clean-up-service.jpg",
    "/images/car-wash-detailing-station.jpg",
    "/docs/images/carousel/carousel-3.svg",
    "/docs/images/carousel/carousel-4.svg",
    "/docs/images/carousel/carousel-5.svg",
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Carousel Container */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="block w-full h-full object-cover"
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
