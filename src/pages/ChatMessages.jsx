
import { useState } from "react"
import ChatContactList from "../components/ChatMessages/ChatContactList"
import MessageWindow from "../components/ChatMessages/MessageWindow"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const breadcrumpData = [
  {
    name :"App",
    link:"/"
  },
  {
    name :"messages",
    link:null
    
  }
]



function ChatMessages() {
  const [selectedChat, setselectedChat] = useState(null)
  const [mobileChatlist , setMobileChatlist] = useState(false)
  return (
   <>
    <Breadcrumb breadcrumpData={breadcrumpData} />
    <div className="w-full h-full flex justify-center items-center shadow rounded-xl">


      <div className="grid grid-cols-12 w-full ">


        {/* Sidebar */}
        <div className={`lg:col-span-4 col-span-12 ${mobileChatlist ? "lg:block hidden" : "lg:block block"} w-full 2xl:col-span-3 `}>


          <ChatContactList setselectedChat={setselectedChat} setMobileChatlist={setMobileChatlist} mobileChatlist={mobileChatlist} />
        </div>

        {/* Chat area */}
        <div className={`lg:col-span-8 ${mobileChatlist ? "lg:block block" : "lg:block hidden"} col-span-12 2xl:col-span-9`} >
          {/* Message window */}
          <MessageWindow selectedChatId={selectedChat} setMobileChatlist={setMobileChatlist} mobileChatlist={mobileChatlist} />
        </div>
      </div>
    </div>
   </>
  )
}

export default ChatMessages
