import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const images = [
  "https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=750&q=75",
  "https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=750&q=75",
  "https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=750&q=75",
  "https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=750&q=75",
  "https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=750&q=75",
];

const carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handlers for sliding
  const slideNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black">
      {/* Slider */}
      <div className="flex items-center justify-center overflow-hidden relative bg-black">
        {images.map((img, index) => {
          // Determine class for current, previous, and next images
          const positionClass =
            index === currentIndex
              ? "z-10 scale-100 opacity-100"
              : index === (currentIndex + 1) % images.length
              ? "z-5 scale-75 opacity-50 translate-x-[100%]"
              : index === (currentIndex - 1 + images.length) % images.length
              ? "z-5 scale-75 opacity-50 -translate-x-[100%]"
              : "hidden";

          return (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute transition-all duration-500 ease-in-out transform w-1/3 ${positionClass}`}
            />
          );
        })}
      </div>

      {/* Buttons */}
      <button
        onClick={slidePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        Prev
      </button>
      <button
        onClick={slideNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  );
};

export default carousel;
