


import { Popover, Avatar,  Button } from "rizzui";
import {  IoIosCheckmarkCircleOutline } from "react-icons/io";

import { MdOutlineMessage } from "react-icons/md";
import { MessageContact } from "../../constants/MessageConstant";
import { useNavigate } from "react-router-dom";



export default function Messages() {
  const navigate = useNavigate()
  return (
    <Popover  placement="bottom-end">
      <Popover.Trigger>
        <Button size="sm" rounded="pill"  className="bg-sidebarTheme-dark "><MdOutlineMessage  className="font-bold"   size={15}  /></Button>
      </Popover.Trigger>
      <Popover.Content  className="p-0 m-0">
      {({ setOpen }) => (
        <div className="  p-4 shadow-lg rounded-lg w-[320px] bg-white h-[500px] overflow-auto hideScrollbar">
          <div className="flex justify-between items-center mb-3">
            <div className="text-lg font-semibold">Messages</div>
            <div onClick={()=>{navigate('/user-chat-box') , setOpen(false)}} className="text-blue-400 cursor-pointer">View all</div>
          </div>

          {MessageContact.map((message) => (
            <div
              key={message.id}
              onClick={()=>{navigate('/user-chat-box') , setOpen(false)}}
              className="flex items-center gap-3 py-2 border-b border-gray-700"
            >
              <Avatar
                src={message.avatar}
                name={message.name}
                size="sm"
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold">{message.name}</div>
                <div className="text-xs text-gray-400">{message.lastMessage}</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-xs text-gray-400">{new Date(message.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}</div>
                {message.status === "active" ? (
                  <IoIosCheckmarkCircleOutline className="text-blue-500  " />
                ) : (
                  <IoIosCheckmarkCircleOutline className="text-gray-500 mt-1" />
                )}
              </div>
            </div>
          ))}
        </div>
         )}
      </Popover.Content>
    </Popover>
  );
}
