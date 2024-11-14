/* eslint-disable react/prop-types */
// src/FeedbackForm.js
import { useState } from 'react';
import { Button, Modal, Textarea, Input } from 'rizzui';

const Feedback = ({ isOpen, onClose }) => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() && name.trim()) {
      alert(`Feedback submitted:\nName: ${name}\nFeedback: ${feedback}`);
      // Reset fields after submission
      setFeedback('');
      setName('');
      setRating(0);
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="text-base font-medium text-gray-700">
          Your feedback is important to us
        </div>

        {/* Feedback Textarea */}
        <Textarea
          placeholder="Your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          className="resize-none w-full  p-2"
          required
        />

       

        {/* Rating (Stars) */}
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRating(star)}
              className="focus:outline-none"
            >
              {star <= rating ? (
                <span className="text-sidebarTheme-dark text-3xl transition-transform transform hover:scale-125">
                  ★
                </span>
              ) : (
                <span className="text-gray-300 text-3xl transition-transform transform hover:scale-125">
                  ★
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <Button
            type="submit"
            className="bg-sidebarTheme-dark text-white"
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default Feedback;
