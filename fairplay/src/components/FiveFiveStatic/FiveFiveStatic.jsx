import React from "react";
import "./FiveFive.css";

const FiveFiveStatic = ({ cipherText }) => {
	const matrix5x5 = [
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25],
	];

	var modifiedCipherText = cipherText.toUpperCase().replace(/J/g, "I");

	var hash = {};

	for (let i = 0; i < 25; i++) {
		hash[i] = 0;
	}

	for (let i = 0; i < modifiedCipherText.length; i++) {
		if (
			hash[modifiedCipherText[i].charCodeAt(0) - "A".charCodeAt(0)] === 0
		) {
			hash[modifiedCipherText[i].charCodeAt(0) - "A".charCodeAt(0)] = 1;
		}
	}

	for (let i = 0; i < 25; i++) {
		if (hash[i] === 0) {
			modifiedCipherText += String.fromCharCode(i + "A".charCodeAt(0));
		}
	}

	return (
		<div>
			{matrix5x5.map((row, i) => (
				<div key={i} className={`row ${i}`}>
					{row.map((_, j) => (
						<div
							key={j}
							className="box"
							id={`${i}${j}`}
							style={{
								color: i + 5 * (j) < cipherText.length ? "green" : "black", // Set the color to green
							}}
						>
							<p>
								{modifiedCipherText[(i * 5 + j) % modifiedCipherText.length]}
							</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default FiveFiveStatic;
