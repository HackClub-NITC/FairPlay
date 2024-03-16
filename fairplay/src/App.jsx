// src/App.js
import React from "react";
import "./App.css";
import FilterInputText from "./components/FilterInputText/FilterInputText";
import PlayfairCipher from "./components/FlayFairAnimation/PlayFairAnimation";
import CipherForm from "./components/cipherForm/cipherForm";
import FiveFiveDynamic from "./components/FiveFiveDynamic/FiveFiveDynamic";
import RadioToggle from "./components/RadioToggle/RadioToggle";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<h1>Playfair Cipher</h1>
			<CipherForm />
			<br />
			<FiveFiveDynamic cipherText={"helloookamble"} />

			<br />
		</div>
	);
}

export default App;
