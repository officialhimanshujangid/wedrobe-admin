import React, { useState } from 'react';
import { FaCut, FaBath, FaWeight, FaRegEye, FaRegLaughBeam, FaRegStar, FaHandsWash } from 'react-icons/fa';

const options = [
  { label: 'Pre Bridal Packages', icon: <FaHandsWash  /> },
  { label: 'Skin Care Services', icon: <FaBath /> },
  { label: 'Hair Care Services', icon: <FaCut /> },
  { label: 'Body Care Services', icon: <FaBath /> },
  { label: 'Hair Thinning/ Loss Treatments', icon: <FaRegEye /> },
  { label: 'Weight Management', icon: <FaWeight /> },
  { label: 'Laser Hair Reduction', icon: <FaRegLaughBeam /> },
  { label: 'Makeup', icon: <FaRegStar /> },
];

const Step6 = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (label) => {
    if (selected.includes(label)) {
      setSelected(selected.filter(item => item !== label));
    } else {
      setSelected([...selected, label]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Services:', selected);
    // Add your form submission logic here
  };

  return (
    <div className="flex max-h-[600px] w-full md:w-[600px] overflow-auto justify-center items-center border-2 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg max-h-[600px] overflow-auto hideScrollbar">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleClick(option.label)}
                className={`flex flex-col items-start justify-center p-4 border-2 rounded-lg shadow-sm cursor-pointer transition-all 
                ${selected.includes(option.label) ? "border-sidebarTheme-dark bg-sidebarTheme-light" : "border-gray-200 bg-white"} 
                hover:border-sidebarTheme-dark`}
              >
                <span className="text-2xl text-sidebarTheme-dark">{option.icon}</span>
                <span className="mt-2 text-sm text-slate-900 font-medium">{option.label}</span>
              </div>
            ))}
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Step6;
