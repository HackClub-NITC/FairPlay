import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import FiveFiveHighlight from "../FiveFiveHighlight/FiveFiveHighlight";
import FilterInputText from "../FilterInputText/FilterInputText";
import "./FiveFive.css";

const FiveFiveDynamic = () => {
	const [step, setStep] = useState(0);
	const [modifiedCipherText, setModifiedCipherText] = useState("");
	const [key, setKey] = useState("");
	const [inputString, setInputString] = useState("");
	const [substrings, setSubstrings] = useState([]);

	// Function to filter the input string
	const filterString = (str) => {
		// Remove spaces, numbers, and special characters from the string
		str = str
			.replace(/\s/g, "")
			.replace(/[0-9]/g, "")
			.replace(/[^A-Za-z]/g, "");

		let filteredStr = "";
		for (let i = 0; i < str.length; i++) {
			// If two adjacent characters are the same, insert an 'x' in between
			filteredStr += str[i];
			if (i < str.length - 1 && str[i] === str[i + 1]) {
				filteredStr += "x";
			}
		}
		// If the length of the string is odd, add 'x' at the end
		if (filteredStr.length % 2 !== 0) {
			filteredStr += "x";
		}
		return filteredStr;
	};

	// Function to handle the "Next" button click
	const handleNextClick = () => {
		let filteredInputString = filterString(inputString).toUpperCase();
		console.log(filteredInputString);
		console.log(step);
		if (step === 0) {
			setModifiedCipherText(filteredInputString);
			setStep(1);
		} else if (step === 1) {
			setKey(key);
			setStep(2);
			setSubstrings(splitString(filteredInputString));
		} else if (step > 1 && step <= 2 + substrings.length) {
			setStep(step + 1); // Increment step only if current step is between 2 and 2 + substrings.length
		} else {
			// Handle any additional steps here
		}
	};

	// Function to split the string into substrings of two characters
	const splitString = (str) => {
		const substrings = [];
		for (let i = 0; i < str.length; i += 2) {
			substrings.push(str.slice(i, i + 2));
		}
		return substrings;
	};

	return (
		<div>
			<label htmlFor="inputString">Input String:</label>
			<input
				type="text"
				id="inputString"
				value={inputString}
				onChange={(e) => setInputString(e.target.value)}
			/>
			<br />
			<br />
			<label htmlFor="key">Key:</label>
			<input
				type="text"
				id="key"
				value={key}
				onChange={(e) => setKey(e.target.value)}
			/>
			<br />
			{step === 0 && (
				<>
					<br />
					<FilterInputText inputString={modifiedCipherText} />
					<br />
					<FiveFiveStatic cipherText="" />
				</>
			)}
			{step === 1 && (
				<>
					<br />
					<FilterInputText inputString={modifiedCipherText} />
					<br />
					<FiveFiveStatic cipherText="" />
				</>
			)}
			{step === 2 && (
				<>
					<br />
					<FilterInputText inputString={modifiedCipherText} />
					<br />
					<FiveFiveStatic cipherText={key} />
				</>
			)}
			{step === 3 && substrings.length > 0 && (
				<>
					<br />
					{substrings.map((substring, index) => (
						<div key={index}>
							<FilterInputText inputString={substring} />
							<FiveFiveHighlight
								cipherText={key}
								charOne={substring[0]}
								charTwo={substring[1]}
							/>
						</div>
					))}
				</>
			)}
			<br />
			<button onClick={handleNextClick}>Next</button>
		</div>
	);
};

export default FiveFiveDynamic;
