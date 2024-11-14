import React, { useState } from 'react';
import { AdvancedRadio, Text } from 'rizzui';
import { FiCamera, FiMusic, FiHome, FiMic, FiTool, FiScissors, FiHeadphones, FiUsers } from "react-icons/fi";
import { FaGuitar, FaStoreAlt, FaUtensils, FaTractor } from "react-icons/fa";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";


const Step1 = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (label) => {
      setSelected(label);
    };
    const options = [
        { label: "Photographer", icon: <FiCamera className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Marriage Home Owner", icon: <FiHome className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Musician", icon: <FaGuitar className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Tent House Owner", icon: <FiTool className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Catering", icon: <FaUtensils className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Fashion Shop", icon: <FaStoreAlt className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Sound Technician", icon: <FiHeadphones className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Makeup Artist", icon: <MdFaceRetouchingNatural className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Wedding Planner", icon: <FiUsers className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Caterer", icon: <FaUtensils className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Decorater", icon: <FiMic className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
        { label: "Farm House", icon: <GiFarmTractor className="w-7 h-auto mb-4 text-wrap text-sidebarTheme-dark" /> },
    ]
  return (
    <div className="flex justify-center items-center border-2 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg max-h-[600px] overflow-auto hideScrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-h-[600px]  lg:grid-cols-3 gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleClick(option.label)}
              className={`flex flex-col items-start justify-center p-4 border-2 rounded-lg shadow-sm cursor-pointer transition-all 
              ${selected === option.label ? "border-sidebarTheme-dark bg-sidebarTheme-light" : "border-gray-200 bg-white"} 
              hover:border-sidebarTheme-dark`}
            >
              <span className="text-4xl text-slate-900">{option.icon}</span>
              <span className="mt-2 text-sm text-slate-900 font-medium">{option.label}</span>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};



export default Step1;