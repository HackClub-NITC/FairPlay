// FilterInputText.js
import React from "react";
import styles from "./FilterInputText.module.css"; // Import CSS Module

function FilterInputText({ inputString }) {
	// Function to filter the string according to the rules
	const filterString = (str) => {
		// Remove spaces, numbers, and special characters from the string
		str = str
			.replace(/\s/g, "")
			.replace(/[0-9]/g, "")
			.replace(/[^A-Za-z]/g, "");

		let filteredStr = "";
		for (let i = 0; i < str.length; i++) {
			filteredStr += str[i];
			// Append 'X' between consecutive identical characters
			if (i < str.length - 1 && str[i] === str[i + 1]) {
				filteredStr += "X";
			}
		}
		// Append 'X' if the length is odd
		if (filteredStr.length % 2 !== 0) {
			filteredStr += "X";
		}
		return filteredStr.toUpperCase(); // Ensure uniform case
	};

	// Function to split the string into substrings of two characters
	const splitString = (str) => {
		const substrings = [];
		for (let i = 0; i < str.length; i += 2) {
			substrings.push(str.slice(i, i + 2));
		}
		return substrings;
	};

	// Apply filtering rules to input string
	const filteredString = filterString(inputString);
	// Split filtered string into substrings of two characters
	const substrings = splitString(filteredString);

	return (
		<div className={styles.grid_input_text}>
			{substrings.map((substring, index) => (
				<div key={index} className={styles.substring}>
					{substring.split("").map((char, charIndex) => (
						<span
							key={charIndex}
							className={char === "x" ? styles.green : styles.black} // Use generated class names
						>
							{char}
						</span>
					))}
				</div>
			))}
		</div>
	);
}

export default FilterInputText;
