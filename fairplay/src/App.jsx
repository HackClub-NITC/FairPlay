// src/App.js
import React from "react";
import "./App.css";
import FiveFiveDynamic from "./components/FiveFiveDynamic/FiveFiveDynamic";
import Chatbot from "./components/ChatBox/Chatbot";

// import RadioToggle from "./components/RadioToggle/RadioToggle";
// import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Radio from "./components/Radio/Radio";




function App() {
	return (
		<div className="App">


			<Radio />



			<FiveFiveDynamic />
    <ChatbotButton />

		</div>
	);
}

export default App;