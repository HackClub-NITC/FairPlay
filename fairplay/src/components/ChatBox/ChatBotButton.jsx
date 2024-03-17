import React, { useState } from "react";
import Chatbot from "./Chatbot";

const ChatbotButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleChatbot = () => {
		setIsOpen(!isOpen);
	};

	const buttonStyle = {
		backgroundColor: "black",
		color: "white",
		padding: "10px 20px",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		marginRight: "10px",
		position: "fixed",
		bottom: "10px",
		right: "10px",
	};

	return (
		<div>
			<button onClick={toggleChatbot} style={buttonStyle}>
				ChatBot
			</button>
			{isOpen && <Chatbot />}
		</div>
	);
};

export default ChatbotButton;
