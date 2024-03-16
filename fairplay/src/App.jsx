// src/App.js
import React from "react";
import "./App.css";

import FiveFiveDynamic from "./components/FiveFiveDynamic/FiveFiveDynamic";
import Chatbot from "./components/ChatBox/Chatbot";

function App() {
	return (
		<div className="App">
			<FiveFiveDynamic />
			<Chatbot />
		</div>
	);
}

export default App;