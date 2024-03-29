import React, { useEffect } from "react";
import styles from "./FiveFiveStatic.module.css"; // Import the CSS module

const FiveFiveStatic = ({ cipherText }) => {
	const matrix5x5 = [
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25],
	];

	// Convert the cipher text to uppercase and replace 'J' with 'I'
	let modifiedCipherText = cipherText
		.toUpperCase()
		.replace(/J/g, "I")
		.replace(/[^A-Z]/g, "");

	modifiedCipherText = removeDuplicates(modifiedCipherText);

	// Function to remove duplicate characters
	function removeDuplicates(str) {
		let uniqueChars = "";
		for (let char of str) {
			if (!uniqueChars.includes(char)) {
				uniqueChars += char;
			}
		}
		return uniqueChars;
	}

	// console.log(modifiedCipherText);
	let ogCipherLength = modifiedCipherText.length;

	// Create a hash to keep track of letters used
	const hash = {};

	// Iterate over the modifiedCipherText and mark the letters in the hash
	for (let i = 0; i < modifiedCipherText.length; i++) {
		if (modifiedCipherText[i] !== " ") {
			// Exclude spaces
			hash[modifiedCipherText[i]] = (hash[modifiedCipherText[i]] || 0) + 1;
			if (modifiedCipherText[i] === "I") hash["J"] = 1; // Mark 'J' as used if 'I' is used
		}
	}

	// Create a string to hold the unique letters for the cipher
	let uniqueLetters = "";

	// Iterate over the alphabet (excluding 'J') and add letters not in the hash to the uniqueLetters string
	for (
		let charCode = "A".charCodeAt(0);
		charCode <= "Z".charCodeAt(0);
		charCode++
	) {
		const letter = String.fromCharCode(charCode);
		if (letter !== "J" && !hash[letter]) {
			uniqueLetters += letter;
		}
	}

	if (!hash["J"]) {
		uniqueLetters += "J";
	}

	modifiedCipherText += uniqueLetters;

	return (
		<div>
			{matrix5x5.map((row, i) => (
				<div key={i} className={`${styles.row} ${i}`}>
					{row.map((_, j) => (
						<div
							key={j}
							className={`box ${styles.box}`}
							id={`${i}${j}`}
							style={{
								color: j + 5 * i < ogCipherLength ? "white" : "black",
								fontWeight: j + 5 * i < ogCipherLength ? "bold" : "",
								animation:
									i * 5 + j < ogCipherLength ? "pulse 1s infinite" : "",
							}}
						>
							<p>
								{modifiedCipherText[(i * 5 + j) % modifiedCipherText.length] ===
								"I"
									? "I/J"
									: modifiedCipherText[(i * 5 + j) % modifiedCipherText.length]}
							</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default FiveFiveStatic;
