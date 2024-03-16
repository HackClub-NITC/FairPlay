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

	// Function to handle the input string change
	const handleInputChange = (e) => {
		// Remove spaces from the input string and set the state
		setInputString(e.target.value.replace(/\s/g, ""));
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
			if (step !== 2 + substrings.length) {
				setStep(step + 1); // Increment step only if current step is not the end
			}
		} else {
			// Handle any additional steps here
		}

		// Encrypt the modifiedCipherText when step 0 is completed
		if (step === 0) {
			const encryptedText = encryptByPlayfairCipher(
				inputString,
				key
			).toUpperCase();
			console.log("Encrypted Text:", encryptedText);
			const encryptedSubstring = splitString(encryptedText);
			setEncryptedSubstrings(encryptedSubstring);
			console.log("Encrypted Substrings:", encryptedSubstring);
		}
	};

	// Function to handle the "Back" button click
	const handleBackClick = () => {
		if (step > 0 && step !== 2) {
			// Update the condition here
			setStep(step - 1); // Decrease step if it's greater than 0 and not 2
		}
	};

	// Function to filter the input string
	const filterString = (str) => {
		// Remove spaces, numbers, and special characters from the string
		return str.replace(/[0-9\s]/g, "").toUpperCase();
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
				onChange={handleInputChange} // Handle input change
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
			{step > 2 && step <= 2 + substrings.length && (
				<>
					<br />
					<div>
						<SubstringDisplay
							substrings={substrings}
							length={substrings.length}
							first={false}
							encrypted={false} // Indicate that these substrings are not encrypted
						/>
						<br />
						<SubstringDisplay
							substrings={encryptedSubstrings.slice(0, step - 2)}
							length={encryptedSubstrings.length}
							first={false}
							encrypted={true} // Indicate that these substrings are encrypted
						/>
						<br />
						<FiveFiveHighlight
							cipherText={key}
							charOne={substrings[step - 3][0]}
							charTwo={substrings[step - 3][1]}
						/>
						<FiveFiveHighlight
							cipherText={key}
							charOne={substrings[step - 3][0]}
							charTwo={substrings[step - 3][1]}
							charOneOp={encryptedSubstrings[step - 3][0]}
							charTwoOp={encryptedSubstrings[step - 3][1]}
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
