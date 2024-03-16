// FilterInputText.js
import React from "react";
import styles from "./SubstringDisplay.module.css"; // Import CSS Module

function SubstringDisplay({ substrings }) {
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

export default SubstringDisplay;
