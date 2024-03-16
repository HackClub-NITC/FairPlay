// src/App.js
import React from "react";
import "./App.css";
import CipherForm from "./components/cipherForm/cipherForm";
import FiveFiveDynamic from "./components/FiveFiveDynamic/FiveFiveDynamic";

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
