import { FaTicketAlt } from 'react-icons/fa'; // Import ticket icon

const TicketCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
      <FaTicketAlt className="text-4xl text-yellow-400" />
      <div>
        <p className="text-gray-400">Total Number of Tickets</p>
        <h2 className="text-3xl font-bold">12,450</h2>
      </div>
    </div>
  );
};

export default TicketCard;