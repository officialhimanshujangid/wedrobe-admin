import { CiMenuKebab } from "react-icons/ci";
import { Popover } from "rizzui";
import { FaUser, FaFlag, FaBan, FaSearch, FaVolumeMute } from "react-icons/fa";

function ChatUserPopup() {
    const menuItems = [
        { label: "Profile", icon: <FaUser /> },
        { label: "Report", icon: <FaFlag /> },
        { label: "Block", icon: <FaBan /> },
        { label: "Search", icon: <FaSearch /> },
        { label: "Mute", icon: <FaVolumeMute /> },

    ];

    return (
        <Popover shadow="sm" placement="bottom-end">
            <Popover.Trigger>
                <button className="text-gray-500 hover:text-gray-700 py-2">
                    <CiMenuKebab size={20} />
                </button>
            </Popover.Trigger>

            <Popover.Content className=" rounded-lg shadow-lg text-black">
                <div className="py-2 w-44">
                    {menuItems.map((item, index) => (
                        <div
                            key={item.label}
                            className={`flex items-center gap-2 py-2 px-2 rounded-md cursor-pointer transition-colors ${
                                index !== menuItems.length - 1 ? ' border-gray-700' : ''
                            } hover:bg-slate-700 hover:text-white`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </Popover.Content>
        </Popover>
    );
}

export default ChatUserPopup;
