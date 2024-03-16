// src/App.js
import React from "react";
import "./App.css";
import FiveFiveDynamic from "./components/FiveFiveDynamic/FiveFiveDynamic";
import Chatbot from "./components/ChatBox/Chatbot";
import ChatbotButton from "./components/ChatBox/ChatBotButton";
import RadioButton from "./components/RadioButton/RadioButton";


function App() {
	return (
		<div className="App">


		<ChatbotButton />



		

			<FiveFiveDynamic />
    <ChatbotButton />

		</div>

	);
}

export default App;