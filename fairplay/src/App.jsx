// src/App.js
import React from "react";
import "./App.css";


import Landing from "./components/Landing/Landing.jsx";


import RadioEncrypt from "./components/RadioEncrypt/RadioEncrypt.jsx";
import RadioDecrypt from "./components/RadioDecrypt/RadioDecrypt.jsx";


function App() {
	return (
		<div>

		<h1>qpiervb</h1>
		<Landing />

		<RadioEncrypt />

		<RadioDecrypt />


		</div>
	);
}

export default App;