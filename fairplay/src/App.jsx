// src/App.js
import React from "react";
import "./App.css";

import PlayfairCipher from "./components/FlayFairAnimation/PlayFairAnimation";
import RadioToggle from "./components/RadioToggle/RadioToggle";


function App() {
	return (
		<div className="App">

			<CipherForm />

			<RadioToggle />

		</div>
	);
}

export default App;
