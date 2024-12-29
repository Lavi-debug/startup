import React, { useState } from "react";

const CenterZoomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the center div

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < 4 ? prevIndex + 1 : 4 // Prevent sliding beyond the last div
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0 // Prevent sliding before the first div
    );
  };

  return (
    <div className="relative w-[900px] mx-auto mt-16 overflow-hidden">
      {/* Container for all divs */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 300}px)`, // Slide based on the index
        }}
      >
        {/* Each Div */}
        <div
          className={`w-[300px] h-[200px] flex-shrink-0 flex justify-center items-center rounded-lg transition-transform duration-300 ${
            currentIndex === 0 ? "scale-110 bg-red-500" : "scale-100 bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-bold">Div 1</h3>
        </div>
        <div
          className={`w-[300px] h-[200px] flex-shrink-0 flex justify-center items-center rounded-lg transition-transform duration-300 ${
            currentIndex === 1 ? "scale-110 bg-green-500" : "scale-100 bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-bold">Div 2</h3>
        </div>
        <div
          className={`w-[300px] h-[200px] flex-shrink-0 flex justify-center items-center rounded-lg transition-transform duration-300 ${
            currentIndex === 2 ? "scale-110 bg-blue-500" : "scale-100 bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-bold">Div 3</h3>
        </div>
        <div
          className={`w-[300px] h-[200px] flex-shrink-0 flex justify-center items-center rounded-lg transition-transform duration-300 ${
            currentIndex === 3 ? "scale-110 bg-yellow-500" : "scale-100 bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-bold">Div 4</h3>
        </div>
        <div
          className={`w-[300px] h-[200px] flex-shrink-0 flex justify-center items-center rounded-lg transition-transform duration-300 ${
            currentIndex === 4 ? "scale-110 bg-purple-500" : "scale-100 bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-bold">Div 5</h3>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default CenterZoomSlider;
