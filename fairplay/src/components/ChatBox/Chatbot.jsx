import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const chatGptResponse = async (userInput) => {
		const apiEndpoint = "https://api.openai.com/v1/chat/completions";
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer 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`,
		};

		const data = {
			messages: [
				{
					role: "system",
					content:
						"You are Charles Wheatstone, inventor of the playfair cipher. You will deviate all conversation to the cipher and you will give all the details about the cipher",
				},
				{ role: "user", content: userInput },
			],
			model: "gpt-3.5-turbo",
		};

		try {
			const response = await axios.post(apiEndpoint, data, { headers });
			console.log("API response:", response.data);
			if (
				response.data.choices &&
				response.data.choices[0] &&
				response.data.choices[0].message &&
				response.data.choices[0].message.content
			) {
				return response.data.choices[0].message.content.trim();
			} else {
				console.error("Unexpected API response:", response.data);
				return "";
			}
		} catch (error) {
			console.error("Error:", error);
			return "";
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!input.trim()) return;

		// Add user's input as a message
		const userMessage = { text: input, user: true };
		setMessages((prevMessages) => [...prevMessages, userMessage]);

		// Add a placeholder message while waiting for AI response
		const aiMessage = { text: "...", user: false };
		setMessages((prevMessages) => [...prevMessages, aiMessage]);

		// Send the user's input to GPT-3.5
		const response = await chatGptResponse(input);

		// Replace the placeholder message with the AI response
		const newAiMessage = { text: response, user: false };
		setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);

		// Clear the input field
		setInput("");
	};

	return (
		<div className="chatbot-container">
			<div className="chatbot-messages">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`message ${
							message.user ? "user-message" : "ai-message"
						}`}
					>
						{message.text}
					</div>
				))}
			</div>
			<form className="chatbot-input-form" onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type your message..."
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Chatbot;
