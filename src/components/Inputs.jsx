// use client
import React, { useState } from 'react';

const Inputs = ({ label, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-col w-[350px] m-5 ${isFocused ? 'focused' : ''}`}>
      <label className="mb-1 text-gray-900 text-x font-semi ">{label}</label>
      <div className="relative">
        <input
          type="text"
          className={`border-b-2 border-gray-300 p-1 w-full focus:outline-none ${
            isFocused ? 'border-0' : ''
          }`}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200 w-350px"></div>
      </div>
    </div>
  );
};

export default Inputs;
