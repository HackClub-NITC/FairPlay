// src/App.js
import React from "react";
import "./App.css";

import FilterInputText from "./components/FilterInputText/FilterInputText";


function App() {
	return (
		<div className="App">
			
			<h1>Meow</h1>

			<FilterInputText inputString={"Meowsies"}/>

		</div>
	);
}

export default App;
