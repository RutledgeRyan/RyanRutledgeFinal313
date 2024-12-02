import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 text-lg font-medium text-black bg-[rgb(82,255,66)] hover:bg-[rgba(82,255,66,0.8)] focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-white bg-[rgba(82,255,66,0.5)]">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;