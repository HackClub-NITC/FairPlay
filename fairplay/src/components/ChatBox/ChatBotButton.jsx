// ChatbotButton.js
import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Import your Chatbot component

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  return (
    <div>
      <button onClick={toggleChatbot} style={buttonStyle}>Open Chat</button>
      {isOpen && <Chatbot />}
    </div>
  );
};

export default ChatbotButton;
