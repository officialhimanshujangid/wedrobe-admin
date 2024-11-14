/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { MessageContact } from "../../constants/MessageConstant";
import { FiCheck } from "react-icons/fi";
import { IoCheckmarkDone, IoSend } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import ChatUserPopup from "./ChatUserPopup";
import { FaImage, FaPaperclip, FaPaperPlane, FaPhone, FaVideo } from "react-icons/fa";
import { Button } from "rizzui";
function MessageWindow({ selectedChatId, setMobileChatlist }) {
  const [messageInput, setMessageInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const messageEndRef = useRef(null);

  // Find selected chat details or default to the first chat
  const useDetails = selectedChatId
    ? MessageContact.find((ele) => ele.id === selectedChatId)
    : MessageContact.find((ele, index) => index === 0);

  useEffect(() => {
    if (useDetails) {
      setChatHistory(useDetails.chats);
    }
  }, [useDetails]);


  // useEffect(() => {
  //   messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chatHistory]);


  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      message: messageInput,
      fromMe: true,
      time: new Date(),
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessageInput("");
  };

  return (
    <div  className={` flex flex-col h-full `}>
      {/* Chat Header */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-lg">{useDetails?.name}</h2>
            <div className="flex gap-4">

            
            <p className="text-xs text-gray-500">Last seen at 8:25 am</p>
            <p className="text-xs text-gray-900 hidden lg:block">{useDetails?.location}</p>
            </div>
          </div>
          {/* Additional icons or actions */}
          <div className="flex gap-4 items-center">
            {/* Back Button for Mobile */}
            <button
              onClick={() => setMobileChatlist(false)}
              className="text-gray-500 block lg:hidden hover:text-gray-700"
            >
              <TbArrowBackUp size={20} />
            </button>
           

            {/* Call Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaPhone size={20} />
            </button>

            {/* Chat User Popup */}
            <ChatUserPopup />


          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="lg:h-[73vh] h-[65vh] overflow-y-auto hideScrollbar">
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className={`flex ${chat.fromMe ? "justify-end" : "justify-start"} m-4`}
          >
            <div
              className={`max-w-xs p-4 rounded-lg shadow-md ${chat.fromMe ? "bg-violet-100" : "bg-blue-100 text-black"
                }`}
            >
              <p className="text-sm">{chat.message}</p>
              <p className="text-xs text-gray-500 flex gap-2 justify-end text-right mt-1">
                {chat.fromMe ? (
                  <div className="text-slate-600">
                    <FiCheck className="h-4 w-4 inline" />
                  </div>
                ) : (
                  <div className="text-blue-600">
                    <IoCheckmarkDone className="h-4 w-4 inline" />
                  </div>
                )} {new Date(chat.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

            </div>
          </div>
        ))}
        {/* Dummy element for auto scroll */}
        <div ref={messageEndRef} />
      </div>

      {/* Chat Input */}
      <div className="flex items-center my-1 mx-0.5">
        <div className="relative flex-grow">
          {/* Input for text message */}
          <input
            type="text"
            value={messageInput}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="w-full p-3 pl-10 pr-36 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sidebarTheme-light transition-all duration-300"
          />

          {/* File attachment icons inside the input */}
          <div className="absolute inset-y-0 right-3 flex items-center space-x-2 text-gray-500">
            <label htmlFor="fileInput" className="cursor-pointer hover:text-sidebarTheme-light">
              <FaPaperclip size={20} />
              <input
                id="fileInput"
                type="file"
                className="hidden"
              />
            </label>
            <label htmlFor="imageInput" className="cursor-pointer hover:text-sidebarTheme-light">
              <FaImage size={20} />
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
            <label htmlFor="videoInput" className="cursor-pointer hover:text-sidebarTheme-light">
              <FaVideo size={20} />
              <input
                id="videoInput"
                type="file"
                accept="video/*"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Send message button with icon */}
        <Button
          onClick={handleSendMessage}
          className="ml-3 bg-sidebarTheme-dark text-white p-3 rounded-full shadow-md  transition-all duration-300"
        >
          <IoSend  size={20} />
        </Button>
      </div>


    </div>
  );
}

export default MessageWindow;
