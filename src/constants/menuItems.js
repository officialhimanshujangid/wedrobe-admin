

import { FaTachometerAlt, FaUsers, FaCog, FaChartBar, FaSignOutAlt, FaEnvelope, FaChartPie,FaCalendar, FaEdit } from 'react-icons/fa';
import { FaMoneyCheck } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FcSupport } from "react-icons/fc";
// Define role-based menu items
export const menuItems = {
  admin: [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: FaTachometerAlt,
      children: [],
    },
    {
      title: 'Analytics',
      route: '/analytics',
      icon: FaChartBar,
      children: [],
    },
    {
      title: 'Vendor List',
      route: '#',
      icon: FaUsers,
      children: [
        { title: 'Photographer', route: '/userlist/vendor' },
        { title: 'Shop Owners', route: '/userlist/shopowner' },
        { title: 'Admin', route: '/userlist/admin' },
        { title: 'Rentals', route: '/userlist/rental' },
        { title: 'Marriage Home Owners', route: '/userlist/marriagehomeowner' },
      ],
    },
    {
      title: 'Products',
      route: '/product-list',
      icon: AiFillProduct ,
      children: [],
    },
    {
      title: 'Bookings',
      route: '/transactions',
      icon: FaChartPie,
      children: [],
    },
    {
      title: 'Event Calender',
      route: '/event-calander',
      icon: FaCalendar ,
      children: [],
    },
    {
      title: 'Messages',
      route: '/user-chat-box',
      icon: FaEnvelope,
      children: [],
    },
    {
      title: 'Subscription',
      route: '/user-subscription',
      icon: FaMoneyCheck  ,
      children: [],
    },
   
    // {
    //   title: 'Settings',
    //   route: '#',
    //   icon: FaCog,
    //   children: [
    //     { title: 'Profile', route: '/settings/profile' },
    //     { title: 'Preferences', route: '/settings/preferences' },
    //   ],
    // },
   
    {
      title: 'Logout',
      route: 'logout',
      icon: FaSignOutAlt,
      children: [],
    },
  ],
  vendor:  [
    {
      title: 'Dashboard',
      route: '',
      icon: FaTachometerAlt,
      children: [],
    },
    {
      title: 'Products',
      route: '/product-list',
      icon: AiFillProduct ,
      children: [],
    },
    {
      title: 'Bookings',
      route: '/transactions',
      icon: FaChartPie,
      children: [],
    },
    {
      title: 'Settings',
      route: '#',
      icon: FaCog,
      children: [
        { title: 'Profile', route: '/settings/profile' },
        { title: 'Preferences', route: '/settings/preferences' },
      ],
    },
    
    {
      title: 'Messages',
      route: '/messages',
      icon: FaEnvelope,
      children: [],
    },
    {
      title: 'Support',
      route: '/support',
      icon: FcSupport ,
      children: [],
    },
    {
      title: 'Logout',
      route: 'logout',
      icon: FaSignOutAlt,
      children: [],
    },
  ],
};




// src/menuItems.js
// import { FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt, FaChartBar, FaEnvelope, FaLifeRing, FaFileAlt } from 'react-icons/fa';

// export const menuItems = [
//   {
//     title: 'Dashboard',
//     route: '',
//     icon: <FaTachometerAlt />,
//     children: [],
//     roles: ['admin', 'subadmin', 'vendor'], // Access roles
//   },
//   {
//     title: 'Downline List',
//     route: '#',
//     icon: <FaUsers />,
//     children: [
//       { title: 'Vendors', route: '/userlist/vendor', icon: <FaUsers /> },
//       { title: 'Shop Owners', route: '/userlist/shopowner', icon: <FaUsers /> },
//       { title: 'Admin', route: '/userlist/admin', icon: <FaUsers /> },
//       { title: 'Rentals', route: '/userlist/rental', icon: <FaUsers /> },
//       { title: 'Marriage Home Owners', route: '/userlist/marriagehomeowner', icon: <FaUsers /> },
//     ],
//     roles: ['admin', 'subadmin'],
//   },
//   {
//     title: 'Transactions',
//     route: '/transactions',
//     icon: <FaFileAlt />,
//     children: [],
//     roles: ['admin'],
//   },
//   {
//     title: 'Analytics',
//     route: '/analytics',
//     icon: <FaChartBar />,
//     children: [],
//     roles: ['admin', 'subadmin'],
//   },
//   {
//     title: 'Settings',
//     route: '#',
//     icon: <FaCog />,
//     children: [
//       { title: 'Profile', route: '/settings/profile', icon: <FaCog /> },
//       { title: 'Preferences', route: '/settings/preferences', icon: <FaCog /> },
//     ],
//     roles: ['admin', 'subadmin'],
//   },
//   {
//     title: 'Reports',
//     route: '/reports',
//     icon: <FaFileAlt />,
//     children: [],
//     roles: ['admin'],
//   },
//   {
//     title: 'Messages',
//     route: '/messages',
//     icon: <FaEnvelope />,
//     children: [],
//     roles: ['admin', 'subadmin', 'vendor'],
//   },
//   {
//     title: 'Support',
//     route: '/support',
//     icon: <FaLifeRing />,
//     children: [],
//     roles: ['admin', 'vendor'],
//   },
//   {
//     title: 'Logout',
//     route: 'logout',
//     icon: <FaSignOutAlt />,
//     children: [],
//     roles: ['admin', 'subadmin', 'vendor'],
//   },
// ];
