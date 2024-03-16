import React, { useState, useRef } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import FiveFiveHighlight from "../FiveFiveHighlight/FiveFiveHighlight";
import FilterInputText from "../FilterInputText/FilterInputText";
import SubstringDisplay from "../SubstringDisplay/SubstringDisplay";
// import AnimatedButtons from "../PlayPauseButton/PlayPauseButton";

import { encryptByPlayfairCipher } from "./encrypt"; // Import the encryption function
import style from "./FiveFiveDynamic.module.css";
import './FiveFiveDynamic.module.css';

const FiveFiveDynamic = () => {
	const [step, setStep] = useState(0);
	const [modifiedCipherText, setModifiedCipherText] = useState("");
	const [key, setKey] = useState("");
	const [inputString, setInputString] = useState("");
	const [substrings, setSubstrings] = useState([]);
	const [encryptedSubstrings, setEncryptedSubstrings] = useState("");
	const [flag, setFlag] = useState(1); // Initialize flag with 1
	const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
	const timerRef = useRef(null); // Reference to the timer

	// Function to handle the input string change
	const handleInputChange = (e) => {
		setInputString(e.target.value.toUpperCase().replace(/\s/g, ""));
	};

	// Function to handle the "Next" button click
	const handleNextClick = () => {
		let filteredInputString = filterString(inputString); // No need for toUpperCase here

		// Add 'X' if length is odd
		if (filteredInputString.length % 2 !== 0) {
			filteredInputString += "X";
		}

		if (step === 0) {
			setModifiedCipherText(filteredInputString);
			setStep(1);
		} else if (step === 1) {
			setKey(key);
			setStep(2);
			const newSubstrings = splitString(filteredInputString);
			setSubstrings(newSubstrings);
			console.log("Number of substrings:", newSubstrings.length);
		} else if (step > 1 && step <= 2 + 2 * substrings.length) {
			if (step !== 2 + 2 * substrings.length) {
				setStep(step + 1); // Increment step only if current step is not the end
				setFlag(flag === 1 ? -1 : 1); // Toggle the flag value between 1 and -1
				console.log("Flag:", flag);
			}
		} else {
			// Handle any additional steps here
		}

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

	const handlePlayToggle = () => {
		if (!isPlaying) {
			// If not playing, start the timer to call handleNextClick every 1 second
			timerRef.current = setInterval(() => {
				handleNextClick();
			}, 1000);
		} else {
			// If playing, clear the timer
			clearInterval(timerRef.current);
		}
		// Toggle the isPlaying state
		setIsPlaying(!isPlaying);
	};

	// Function to handle the "Back" button click
	const handleBackClick = () => {
		if (isPlaying) {
			setIsPlaying(false);
		}

		if (step > 0 && step !== 2) {
			// Update the condition here
			setStep(step - 1); // Decrease step if it's greater than 0 and not 2
			setFlag(flag === 1 ? -1 : 1); // Toggle the flag value between 1 and -1
			console.log("Flag:", flag);
		}
	};

	// Function to handle the "Reset" button click
	const handleResetClick = () => {
		setStep(0);
		setModifiedCipherText("");
		setKey("");
		setInputString("");
		setSubstrings([]);
		setEncryptedSubstrings([]);
		setFlag(flag === 1);
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
		<div className={style.FiveFiveDynamic}>
			<div className={style.inputbox}>
				<label htmlFor="inputString">Input String:</label>
				<input className={style.inputBox}
					type="text"
					id="inputString"
					value={inputString}
					onChange={handleInputChange} // Handle input change
				/>

				<label htmlFor="key">Key:</label>
				<input className={style.inputBox}
					type="text"
					id="key"
					value={key}
					onChange={(e) => setKey(e.target.value)}
				/>

				<div className={style.button_div}>

					<button className = {style.move_button}onClick={handleBackClick}>Back</button>
					{/* <button className = {style.move_button}onClick={handlePlayToggle}>{isPlaying ? "Pause" : "Play"}</button> */}
					<button className = {style.move_button} onClick={handleNextClick}>Next</button>

					<button className = {style.move_button} onClick={handleResetClick}>Reset</button>{" "}
					{/* Added reset button */}

				</div>

			</div>

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
			{step > 2 && step <= 2 + 2 * substrings.length && (
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
							substrings={encryptedSubstrings.slice(
								0,
								Math.floor((step - 1) / 2)
							)}
							length={encryptedSubstrings.length}
							first={false}
							encrypted={true} // Indicate that these substrings are encrypted
						/>
						<br />
						{flag === -1 && (
							<FiveFiveHighlight
								cipherText={key}
								charOne={substrings[Math.floor((step - 3) / 2)][0]}
								charTwo={substrings[Math.floor((step - 3) / 2)][1]}
							/>
						)}
						{flag === 1 && (
							<FiveFiveHighlight
								cipherText={key}
								charOne={substrings[Math.floor((step - 3) / 2)][0]}
								charTwo={substrings[Math.floor((step - 3) / 2)][1]}
								charOneOp={encryptedSubstrings[Math.floor((step - 3) / 2)][0]}
								charTwoOp={encryptedSubstrings[Math.floor((step - 3) / 2)][1]}
							/>
						)}
					</div>
				</>
			)}
			
		</div>
	);
};

export default FiveFiveDynamic;