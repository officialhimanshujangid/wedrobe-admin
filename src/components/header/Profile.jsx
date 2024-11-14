import { useState } from "react";
import { Popover, Avatar } from "rizzui";
import Notification from "./Notification";
import { logoutUser } from "../../features/slice/Auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import RateUs from "./RateUs";
import Feedback from "./Feedback";

export default function Profile() {

  const [moreOpen, setMoreOpen] = useState(false);
  const [isRateUsModalOpen, setIsRateUsModalOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMore = () => {
    setMoreOpen((prev) => !prev);
  };

  const openModal = () => {
    setIsRateUsModalOpen(true);
  };

  const closeModal = () => {
    setIsRateUsModalOpen(false);
  };

  const openFeedbackModal = () => {
    setIsFeedbackOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackOpen(false);
  };
  return (
    <> 
    <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} />
    <RateUs isOpen={isRateUsModalOpen} onClose={closeModal} />

      <Popover shadow="sm" placement="bottom-end">
        <Popover.Trigger>
          <div className="w-12 cursor-pointer">
            <Avatar
              name="Jane Doe"
              src="https://randomuser.me/api/portraits/men/40.jpg"
              size="sm"
              className="ring-2 ring-sidebarTheme-dark"
            />
          </div>
        </Popover.Trigger>
        <Popover.Content className="p-0 m-0">
          {({ setOpen }) => (
            <div className="font-geist bg-white p-4 shadow-md rounded-lg w-48">
              {/* <div className="mb-3 flex items-center gap-3">
                <Avatar
                  name="Albert Flores"
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  size="lg"
                  className="mr-3"
                />
                <div>
                  <div className="text-lg font-semibold">Albert Flores</div>
                  <div className="text-sm text-gray-400">flores@doe.io</div>
                </div>
              </div> */}
              <div className="flex flex-col gap-2 w-full">
                <div onClick={()=>{navigate('/profile'),setOpen(false)}} className="border-b py-0.5 text-sm hover:bg-gray-100 transition duration-200 cursor-pointer">Profile</div>
                <div onClick={()=>{navigate('/user-chat-box'),setOpen(false)}} className="border-b py-0.5 text-sm hover:bg-gray-100 transition duration-200 cursor-pointer">Messages</div>
                <div onClick={()=>{navigate('/transactions'),setOpen(false)}} className="border-b py-0.5 text-sm hover:bg-gray-100 transition duration-200 cursor-pointer">My Bookings</div>

                <div className="flex flex-col">
                  <div 
                    onClick={toggleMore} 
                    className="flex items-center justify-between border-b py-0.5 text-sm cursor-pointer hover:bg-gray-100 transition duration-200"
                  >
                    <span>More</span>
                    {moreOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  <div
                  style={{ transition: 'max-height 0.3s ease-in-out'}}
                    className={` duration-300 overflow-hidden pl-2 ${moreOpen ? "max-h-40" : "max-h-0"}`}
                  >
                    <p onClick={()=>{openFeedbackModal(),setOpen(false)}}  className="border-b py-0.5 text-sm hover:bg-gray-100 transition duration-200 cursor-pointer">Feedback</p>
                    <p onClick={()=>{navigate('/help-support'),setOpen(false)}} className="border-b py-0.5 text-sm hover:bg-gray-100 transition duration-200 cursor-pointer">Help and Support</p>
                    <p onClick={()=>{navigate('/about-us'),setOpen(false)}} className="border-b py-0.5 text-sm hover:bg-gray-100 transition duration-200 cursor-pointer">About Us</p>
       
                  </div>
                </div>

                <div 
                  onClick={() => { 
                    dispatch(logoutUser()); 
                    navigate('/'); 
                  }} 
                  className="border-b py-0.5 text-sm cursor-pointer hover:bg-red-100 transition duration-200 text-red-600"
                >
                  Log out
                </div>
              </div>
            </div>
          )}
        </Popover.Content>
      </Popover>

     
    </>
  );
}
