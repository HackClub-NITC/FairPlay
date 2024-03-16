// src/App.js
import React from "react";
import "./App.css";
import CipherForm from "./components/cipherForm";
import Fivefive from "./components/FiveFive/Fivefive";

function App() {
	return (
		<div className="App">
			<h1>Playfair Cipher</h1>
			<CipherForm />
			<br />
		</div>
	);
}

export default App;
