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

	// Function to handle the "Next" button click
	const handleNextClick = () => {
		if (step === 0) {
			setModifiedCipherText(inputString);
			setStep(1);
		} else if (step === 1) {
			setKey(key);
			setStep(2);
		} else if (step === 2) {
			// Additional steps can be handled here
			setStep(3);
		} else {
			// Handle any additional steps here
		}
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
					<FilterInputText inputString={""} />
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
			{step === 3 && (
				<>
					<br />
					<FilterInputText inputString={modifiedCipherText} />
					<br />
					<FiveFiveHighlight cipherText={key} charOne={"K"} charTwo={"L"} />
				</>
			)}
			<br />
			<button onClick={handleNextClick}>Next</button>
		</div>
	);
};

export default FiveFiveDynamic;
