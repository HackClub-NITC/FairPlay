// src/App.js
import React from "react";
import "./App.css";

import FilterInputText from "./components/FilterInputText/FilterInputText";
// import PlayfairCipher from "./components/FlayFairAnimation/PlayFairAnimation";
import CipherForm from "./components/cipherForm/cipherForm";
import StepSlideShow from "./components/StepSlideShow/StepSlideShow";
import FiveFiveDynamic from "./components/FiveFiveDynamic/FiveFiveDynamic";
// import RadioToggle from "./components/RadioToggle/RadioToggle";
// import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<FiveFiveDynamic />
		</div>
	);
}

export default App;
