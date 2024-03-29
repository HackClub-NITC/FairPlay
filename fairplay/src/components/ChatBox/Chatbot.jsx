import React, { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";
import config from "./config";

const Chatbot = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			text: "You are Charles Wheatstone, inventor of the playfair cipher. You will deviate all conversation to the cipher and you will give all the details about the cipher. If asked to encrypt or decrypt and you get a message or key, you will encrypt or decrypt the message with the key and give the result. If the message or key has spaces, you will do the encryption and decryption without the spaces.",
			user: false,
		},
	]);

	const chatGptResponse = async (userInput) => {
		const apiEndpoint = "https://api.openai.com/v1/chat/completions";
		const headers = {
			"Content-Type": "application/json",
			Authorization: ` Bearer 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`,
		};

		// Get the last 10 messages
		const last10Messages = messages.slice(Math.max(messages.length - 10, 0));

		// Convert the last 10 messages into the format required by GPT-3.5 Turbo
		const formattedMessages = last10Messages.map((message) => ({
			role: message.user ? "user" : "assistant",
			content: message.text,
		}));

		const data = {
			messages: [...formattedMessages, { role: "user", content: userInput }],
			model: "gpt-3.5-turbo",
		};

		try {
			const response = await axios.post(apiEndpoint, data, { headers });
			if (
				response.data.choices &&
				response.data.choices[0] &&
				response.data.choices[0].message &&
				response.data.choices[0].message.content
			) {
				console.log(response.data.choices[0].message.content.trim());
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

		setInput("");
		// Add a placeholder message while waiting for AI response
		const aiMessage = { text: "...", user: false };
		setMessages((prevMessages) => [...prevMessages, aiMessage]);

		// Send the user's input to GPT-3.5
		const response = await chatGptResponse(input);

		// Replace the placeholder message with the AI response
		const newAiMessage = { text: response, user: false };
		setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);

		// Clear the input field
	};

	return (
		<div className={styles.chatbotContainer}>
			<div className={styles.chatbotMessages}>
				{messages.slice(1).map((message, index) => (
					<div
						key={index}
						className={`${styles.message} ${
							message.user ? styles.userMessage : styles.aiMessage
						}`}
					>
						{message.text}
					</div>
				))}
			</div>
			<form className={styles.chatbotInputForm} onSubmit={handleSubmit}>
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
