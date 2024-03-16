import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import FiveFiveHighlight from "../FiveFiveHighlight/FiveFiveHighlight";
import FilterInputText from "../FilterInputText/FilterInputText";
import SubstringDisplay from "../SubstringDisplay/SubstringDisplay";

import { encryptByPlayfairCipher } from "./encrypt"; // Import the encryption function
import "./FiveFive.css";

const FiveFiveDynamic = () => {
	const [step, setStep] = useState(0);
	const [modifiedCipherText, setModifiedCipherText] = useState("");
	const [key, setKey] = useState("");
	const [inputString, setInputString] = useState("");
	const [substrings, setSubstrings] = useState([]);
	const [encryptedSubstrings, setEncryptedSubstrings] = useState([]);

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

		if (step === 0) {
			setModifiedCipherText(filteredInputString);
			setStep(1);
		} else if (step === 1) {
			setKey(key);
			setStep(2);
			const newSubstrings = splitString(filteredInputString);
			setSubstrings(newSubstrings);
			console.log("Number of substrings:", newSubstrings.length);
		} else if (step > 1 && step <= 2 + substrings.length) {
			setStep(step + 1); // Increment step only if current step is between 2 and 2 + substrings.length
		} else {
			// Handle any additional steps here
		}

		// Encrypt the modifiedCipherText when step 0 is completed
		if (step === 0) {
			const encryptedText = encryptByPlayfairCipher(inputString, key);
			console.log("Encrypted Text:", encryptedText);
			const encryptedSubstring = splitString(encryptedText);
			setEncryptedSubstrings(encryptedSubstring);
			console.log("Encrypted Substrings:", encryptedSubstring);
		}
	};

	// Function to handle the "Back" button click
	const handleBackClick = () => {
		if (step > 0) {
			setStep(step - 1); // Decrease step if it's greater than 0
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
					<SubstringDisplay substrings={encryptedSubstrings} />
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
			{step > 2 && step <= 2 + substrings.length && (
				<>
					<br />
					<div>
						<FilterInputText inputString={substrings[step - 3]} />
						<FiveFiveHighlight
							cipherText={key}
							charOne={substrings[step - 3][0]}
							charTwo={substrings[step - 3][1]}
						/>
					</div>
				</>
			)}

			<br />
			<button onClick={handleBackClick}>Back</button>
			<button onClick={handleNextClick}>Next</button>
		</div>
	);
};

export default FiveFiveDynamic;
