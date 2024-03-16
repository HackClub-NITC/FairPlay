import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import "./FiveFive.css";

const FiveFiveDynamic = ({ cipherText }) => {
	const [step, setStep] = useState(0);
	const [modifiedCipherText, setModifiedCipherText] = useState("");

	// Original 5x5 matrix
	const matrix5x5 = [
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25],
	];

	// Function to remove duplicate characters
	const removeDuplicates = (str) => {
		let uniqueChars = "";
		for (let char of str) {
			if (!uniqueChars.includes(char)) {
				uniqueChars += char;
			}
		}
		return uniqueChars;
	};

	// Function to handle the "Next" button click
	const handleNextClick = () => {
		if (step === 0) {
			// If it's the first step, set modifiedCipherText to cipherText
			setModifiedCipherText(
				cipherText
					.toUpperCase()
					.replace(/J/g, "I")
					.replace(/[^A-Z]/g, "")
			);
		}
		setStep((prevStep) =>
			prevStep < modifiedCipherText.length ? prevStep + 1 : prevStep
		);
	};

	return (
		<div>
			{step === 0 ? (
				// Render the dynamic FiveFive component for the initial step
				<FiveFiveStatic cipherText={""} />
			) : (
				// Render the dynamic FiveFive component with the modified cipher text for subsequent steps
				<FiveFiveStatic cipherText={modifiedCipherText} />
			)}
			<button onClick={handleNextClick}>Next</button>
		</div>
	);
};

export default FiveFiveDynamic;
