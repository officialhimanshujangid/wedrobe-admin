/* eslint-disable react/prop-types */

import { useState } from "react";
import Notification from "./Notification"

import Profile from "./Profile"
import SpeechSearch from "./SpeechSearch"
import { Button } from "rizzui";
import { MdOutlineMessage } from "react-icons/md";


function Header({ setSidebarOpen }) {
  const [drawerState, setDrawerState] = useState(false);
    return (
<> <Notification drawerState={drawerState} setDrawerState={setDrawerState} />  
      <header className="flex absolute w-full top-0 left-0  z-40 bg-white h-[50px] items-center justify-between  shadow px-1 py-2">
        <div className="flex items-center justify-between   gap-3">

     
       {/* <img alt='logo'  className='w-20 block xl:hidden' src='/logo.png' />  //*/}
      <button
        className="text-gray-600 xl:hidden ml-3"
        onClick={() => setSidebarOpen(true)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      </div>

      <div className="flex items-center justify-center space-x-4">

        <div><SpeechSearch /> </div>
        {/* <div><Messages /> </div> */}
        <div onClick={()=>{setDrawerState(true)}}>   <Button size="sm" rounded="pill"  className="bg-sidebarTheme-dark "><MdOutlineMessage  className="font-bold"   size={15}  /></Button> </div>
        <div><Profile /> </div>
      </div>
    </header>
    </>
    )
}

export default Header
