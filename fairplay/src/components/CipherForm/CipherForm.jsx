import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import FilterInputText from "../FilterInputText/FilterInputText";
import { encryptByPlayfairCipher } from "./encrypt";
import { decryptByPlayfairCipher } from "./decrypt";
import SubstringDisplay from "../SubstringDisplay/SubstringDisplay";

import "../CipherForm/ChipherForm.css"; // Import the CSS file

function CipherForm() {
	const [mode, setMode] = useState("encrypt");
	const [inputText, setInputText] = useState("");
	const [key, setKey] = useState("");
	const [outputText, setOutputText] = useState("");

	const handleInputChange = (e) => {
		setInputText(e.target.value.replace(/\s/g, ""));
	};

	const handleKeyChange = (e) => {
		setKey(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (mode === "encrypt") {
			setOutputText(
				encryptByPlayfairCipher(inputText.replace(/\s/g, ""), key).toUpperCase()
			);
		} else {
			setOutputText(
				decryptByPlayfairCipher(inputText.replace(/\s/g, ""), key).toUpperCase()
			);
		}
	};

	const handleModeChange = (newMode) => {
		if (newMode !== mode) {
			setInputText(""); // Reset input text when mode changes
			setOutputText(""); // Reset output text when mode changes
			setMode(newMode);
		}
	};

	return (
		<div className="CipherForm">
			<form onSubmit={handleSubmit}>
				<div className="flexThing">
					<div className="Main">
						<div className="radioMaybe">
							<label>
								<input
									type="radio"
									value="encrypt"
									checked={mode === "encrypt"}
									onChange={() => handleModeChange("encrypt")}
								/>
								Encrypt
							</label>
							<label>
								<input
									type="radio"
									value="decrypt"
									checked={mode === "decrypt"}
									onChange={() => handleModeChange("decrypt")}
								/>
								Decrypt
							</label>
						</div>
						<div>
							<br />
							<label htmlFor="inputText">
								{mode === "encrypt" ? "Plain Text:" : "Encrypted Text:"}
							</label>
							<input
								className="inputBox"
								type="text"
								id="inputText"
								value={inputText}
								onChange={handleInputChange}
							/>
						</div>
						<br />
						{mode === "encrypt" ? (
							inputText ? (
								<FilterInputText inputString={inputText} />
							) : (
								<SubstringDisplay
									substrings={[]}
									length={0}
									first={true}
									encrypted={false}
								/>
							)
						) : null}
						<br />
						<div>
							<label htmlFor="key">Key:</label>
							<input
								className="inputBox"
								type="text"
								id="key"
								value={key}
								onChange={handleKeyChange}
							/>
						</div>
					</div>

					<br />
					<FiveFiveStatic cipherText={key} />
					<br />
				</div>

				<button className="move_button" type="submit">
					{mode === "encrypt" ? "Encrypt" : "Decrypt"}
				</button>
			</form>

			<br />
			{outputText && (
				<div className="outputText">
					{mode === "encrypt" ? "Encrypted Text:" : "Decrypted Text:"}{" "}
					{outputText}
				</div>
			)}
			<br />
		</div>
	);
}

export default CipherForm;
