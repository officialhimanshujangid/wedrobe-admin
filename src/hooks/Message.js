// Message.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from '../slices/Auth'; // Adjust path as needed

const Message = () => {
  const dispatch = useDispatch();
  const { message, showMessage } = useSelector((state) => state.auth);

  if (!showMessage) return null;

  const handleClose = () => {
    dispatch(clearMessage());
  };

  return (
    <div className="message">
      <p>{message}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Message;
