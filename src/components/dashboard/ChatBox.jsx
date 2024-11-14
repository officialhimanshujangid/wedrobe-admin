import {  Avatar, Button, Drawer, Text, Textarea, } from "rizzui";

import { TbCircleCheck, TbCircleCheckFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { MessageContact } from "../../constants/MessageConstant";


const getTimeStamp = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
function ChatBox() {
  const [drawerSate, setDrawerState] = useState({
    isOpen: false,
    placement: "left",
    id:null
  });
  // const messages = [
  //   {
  //     id: 1,
  //     name: "Wade Warren",
  //     message: "It is nice to be chatting with you...",
  //     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  //     time: "05:02 AM",
  //     status: "seen",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Cooper",
  //     message: "Oh... Let's move on to something else...",
  //     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  //     time: "07:12 PM",
  //     status: "unread",
  //   },
  //   {
  //     id: 3,
  //     name: "Leslie Alexander",
  //     message: "You: I never received any phone calls...",
  //     avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  //     time: "A day ago",
  //     status: "unread",
  //   },
  //   {
  //     id: 4,
  //     name: "John Doe",
  //     message: "You: But you'll need to type in every...",
  //     avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  //     time: "Yesterday",
  //     status: "seen",
  //   },
  //   {
  //     id: 5,
  //     name: "Design & Frontend",
  //     message: "They were delighted and set to work...",
  //     avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  //     time: "06:30 PM",
  //     status: "unread",
  //   },
  //   {
  //     id: 6,
  //     name: "Laravel",
  //     message: "Hows going everything in our laravel...",
  //     avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  //     time: "09:00 AM",
  //     status: "unread",
  //   },
  //   {
  //     id: 7,
  //     name: "WordPress",
  //     message: "Hows going everything...",
  //     avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  //     time: "12:00 PM",
  //     status: "seen",
  //   },
  // ];


  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState();
  useEffect(()=>{
  if(drawerSate.id){
    const newmessages =   MessageContact?.find(ele=>ele.id === drawerSate.id)?.chats
    setChatHistory(newmessages)
  }
  },[drawerSate.id])


  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat when new messages are added
  useEffect(() => {
      if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [chatHistory]);

  // Handle sending the message
  const handleSendMessage = () => {
      if (message.trim() !== '') {
          // Add new message to the chat history
          setChatHistory((prevHistory) => [
              ...prevHistory,
              { "message": message,
                "time":  getTimeStamp(),
                "fromMe": true },
          ]);

          // Simulate a response from "Support" after a delay
          setTimeout(() => {
              setChatHistory((prevHistory) => [
                  ...prevHistory,
                  { message: 'Thank you for your message. We will get back to you shortly.',"fromMe": false,  time: getTimeStamp() },
              ]);
          }, 1000); // 1-second delay

          // Clear the input field
          setMessage('');
      }
  };

  // Handle input change
  const handleInputChange = (e) => {
      setMessage(e.target.value);
  };

  
    return (
      <div className="bg-white border shadow overflow-auto  hideScrollbar h-[500px]  text-center rounded-lg py-4 px-3 my-2">

        <div className="text-lg text-center font-semibold">Messages</div>

      
        {MessageContact?.map((message) => (
        <div
          key={message.id}
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              placement: "top",
              id:message.id
            }))
          }
          className={ `flex cursor-pointer items-center gap-4 py-2   p-3 my-1 border shadow-lg rounded-full `} 
        >
          <Avatar
            src={message.avatar}
            name={message.name}
            size="sm"
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="text-sm font-semibold">{message.name}</div>
            <div className="text-xs ">{message.lastMessage}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs ">{}
            {new Date(message.lastMessageTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </div>
            {message.status === "unread" ? (
              <TbCircleCheckFilled   className="text-blue-600 mt-1" />
            ) : (
              <TbCircleCheck  className="text-gray-500 mt-1" />
            )}
          </div>
        </div>
      ))}
          
       
          <Drawer
  customSize={384}
  enableResizer={true}
  isOpen={drawerSate.isOpen}
  placement={drawerSate.placement}
  onClose={() => setDrawerState((prevState) => ({ ...prevState, isOpen: false }))}>
  
  <div
className="p-4 shadow-md border rounded-lg h-full flex flex-col"

    style={{

      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

    <div className="flex-1 overflow-y-auto mb-4 p-2 border-b">
      {chatHistory?.length === 0 ? (
        <Text className="text-center text-gray-500">No messages yet</Text>
      ) : (
        chatHistory?.map((msg, index) => (
          <div key={index} className={`mb-2   px-3  ${msg.fromMe === true ? 'text-right' : 'text-left'}`}>
            <Text as="b" className="text-secondary rounded-full ">{msg.fromMe === true ? 'You' : MessageContact?.find(ele=>ele.id === drawerSate.id)?.name}:</Text>
            <Text className="ml-2">{msg.message}</Text>
            <Text className="text-xs text-gray-500">{new Date(msg.time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}</Text>
          </div>
        ))
      )}
      <div ref={chatEndRef} />
    </div>

    <div className="flex gap-2">
      <Textarea
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="flex-1"
        rows={1}
      />
      <Button onClick={handleSendMessage} color="primary" className="self-end">
        Send
      </Button>
    </div>

  </div>
</Drawer>


    
     
    </div>
    )
}

export default ChatBox
