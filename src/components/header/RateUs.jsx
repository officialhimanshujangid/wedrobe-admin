/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "rizzui";

function RateUs({ isOpen, onClose }) {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
      setRating(rate);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`You rated: ${rating} stars`);
      onClose();
    };
  
    if (!isOpen) return null;
    return (
        <Modal  isOpen={isOpen} onClose={onClose}>
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform scale-105">
        <h2 className="text-2xl font-semibold mb-4 text-center">Rate Us</h2>
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="focus:outline-none"
          
            >
              {star <= rating ? (
                <span className="text-green-600 text-3xl transition-transform transform hover:scale-125">★</span>
              ) : (
                <span className="text-gray-300 text-3xl transition-transform transform hover:scale-125">★</span>
              )}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <button type="submit" className="bg-sidebarTheme-dark text-white px-6 py-2 rounded-lg transition-colors ">
            Submit
          </button>
          <button
            type="button"
            className="ml-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
      </Modal>
    )
}

export default RateUs
