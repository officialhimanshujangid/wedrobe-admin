
import { FaPhoneAlt, FaEnvelope, FaCircle } from "react-icons/fa";

const SupportAssistant = () => {
  const agents = [
    {
      name: "John Doe",
      role: "Technical Support",
      avatar: "https://i.pravatar.cc/5000/2", 
      availability: "Available",
      phone: "+1 234 567 890",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      role: "Customer Support",
      avatar: "https://i.pravatar.cc/5000/5", 
      availability: "Busy",
      phone: "+1 987 654 321",
      email: "jane.smith@example.com",
    },
  ];
 
  return (
    <div className="p-8 rounded-lg shadow-lg border mt-2 w-full mx-auto">
      <h2 className="text-xl  font-bold mb-6  ">
       Your Support Assistant @Wedrobe
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="flex items-center p-6 bg-white border overflow-auto  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Avatar */}
            <img
              className="w-20 h-20 rounded-full border-2 border-blue-500"
              src={agent.avatar}
              alt={`${agent.name} avatar`}
            />
            {/* Agent Details */}
            <div className="ml-6 w-full">
              <div className="flex justify-between gap-2 items-center">
                <h3 className="text-xl font-semibold text-nowrap">{agent.name}</h3>
                <span
                  className={`inline-flex items-center text-sm font-medium ${
                    agent.availability === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <FaCircle className="mr-1" />
                  {agent.availability}
                </span>
              </div>
              <p className="text-gray-600 text-nowrap">{agent.role}</p>
              <div className="mt-2 text-sm">
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-blue-500" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-blue-500 hover:underline"
                  >
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-center mt-1">
                  <FaEnvelope className="mr-2 text-blue-500" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {agent.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default SupportAssistant;

