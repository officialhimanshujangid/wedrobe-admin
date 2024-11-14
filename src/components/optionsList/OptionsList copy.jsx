/* eslint-disable react/prop-types */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/slice/Auth';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For submenu toggling icons
import { menuItems } from '../../constants/menuItems';
import { sidebar_width, userType } from '../../constants/appConstants';

const OptionsList = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  // Get the appropriate menu based on the role
  const menu = menuItems[userType] || [];

  // Toggle submenu visibility
  const handleMenuClick = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  // Handle menu item click
  const handleItemClick = (route) => {
    if (route === 'logout') {
      dispatch(logoutUser());
      navigate('/');
    } else {
      navigate(route);
    }
    setSidebarOpen(false); // Close the sidebar after navigation
  };

  return (
    <div>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity xl:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-50 left-0 xl:bg-transparent font-bold text-slate-900 w-${sidebar_width} transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform xl:translate-x-0 xl:static xl:inset-0`}
      >
        <div className="p-4 bg-white h-screen hideScrollbar overflow-y-auto">
          <div className="pb-12 pt-2">
            <img alt="logo" className="w-12" src="/logo2.png" />
          </div>
          <ul className="space-y-4">
            {menu.map((item, index) => (
              <li key={index}>
                <div className="flex border-l-8 border-l-sidebarTheme-dark shadow-xl pr-3 rounded-r-full justify-between items-center">
                  <button
                    className="text-lg text-slate-800 p-2 rounded w-full text-left flex items-center"
                    onClick={() =>
                      item.children.length > 0
                        ? handleMenuClick(index)
                        : handleItemClick(item.route)
                    }
                  >
                    <item.icon className="mr-2" /> {/* Icon */}
                    {item.title}
                  </button>
                  {item.children.length > 0 && (
                    <button
                      onClick={() => handleMenuClick(index)}
                      className="focus:outline-none text-charcol-light"
                    >
                      {openMenuIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  )}
                </div>
                {/* Submenu */}
                <ul
                  className={`pl-4 mt-2 space-y-2 text-charcol-light transition-all duration-500 ease-in-out ${
                    openMenuIndex === index
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {item.children.map((subItem, subIndex) => (
                    <li
                      className="border-l-8 border-sidebarTheme-dark rounded-r-full shadow-xl"
                      key={subIndex}
                    >
                      <button
                        className="text-sm text-charcol-light p-2 rounded block w-full text-left"
                        onClick={() => handleItemClick(subItem.route)}
                      >
                        {subItem.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionsList;
