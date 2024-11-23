import React, { useState } from "react";

const Carrusel = () => {
  const images = [
    "/images/beautiful-car-interior-clean-up-service.jpg",
    "/images/car-wash-detailing-station.jpg",
    "/images/beautiful-car-washing-service.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      {/* Imagen actual */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          className="w-full h-64 object-cover md:h-96"
          alt={`Imagen ${currentIndex + 1}`}
        />
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
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

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
