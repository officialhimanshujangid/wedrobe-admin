/* eslint-disable react/prop-types */
import {  Input } from "rizzui"
import { MessageContact } from "../../constants/MessageConstant"
import { useState } from "react";

function ChatContactList({setselectedChat , setMobileChatlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  

  // Filter contacts based on the search term
  const filteredContacts = MessageContact.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={`  p-4 border-r  border-gray-200 w-full h-full `} >
      {/* Sidebar Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Chats</h2>
      </div>

      {/* Active Indicator */}
      {/* <div className="flex overflow-x-auto  items-center x-scrollbar-custom space-x-4  mb-4">
        {MessageContact.filter(contact => contact.status === "active").map(contact => (
          <div key={contact.id} className="relative min-w-12 h-16 inline-flex">
            <Avatar
              size="lg"
              name={contact.name}
              src={contact.avatar}

            />
            <Badge
              renderAsDot
              color="success"
              enableOutlineRing
              size="lg"
              className="absolute right-0 top-0 -translate-y-[25%]"
            />
          </div>
        ))}
      </div> */}


      {/* Search Box */}
      <div className="mb-6">
        <Input
          type="search"
          rounded="pill"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
          className="w-full p-2 rounded-full  font-semibold focus:outline-none"
        />
      </div>

      {/* Contacts List */}
      <ul className="space-y-4 h-[70vh] overflow-auto  hideScrollbar">
        {filteredContacts.map(contact => (
          <li
            key={contact.id}
            onClick= {()=>{ setselectedChat(contact.id) , setMobileChatlist(true)}}
            className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            <img
              src={contact.avatar}
              alt={`${contact.name}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
              <h4 className="font-semibold">{contact.name}</h4>
              <p className="text-xs text-gray-500">{contact.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>


  )
}

export default ChatContactList
