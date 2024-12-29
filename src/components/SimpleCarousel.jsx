import React, { useState, useEffect } from "react";

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalDivs = 7; // Total number of divs

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDivs);
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalDivs - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slider container */}
      <div className="flex items-center justify-center relative">
        {Array.from({ length: totalDivs }).map((_, index) => {
          const positionClass =
            index === currentIndex
              ? "z-10 scale-100 opacity-100"
              : index === (currentIndex + 1) % totalDivs
              ? "z-5 scale-75 opacity-50 translate-x-[100%]"
              : index === (currentIndex - 1 + totalDivs) % totalDivs
              ? "z-5 scale-75 opacity-50 -translate-x-[100%]"
              : "hidden";

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out transform w-1/3 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold ${positionClass}`}
            >
              Div {index + 1}
            </div>
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

export default SimpleCarousel;
