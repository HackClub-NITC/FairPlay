import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import { encryptByPlayfairCipher } from "./encrypt";
import { decryptByPlayfairCipher } from "./decrypt";

function CipherForm() {
	const [plainText, setPlainText] = useState("");
	const [key, setKey] = useState("");
	const [cipherText, setCipherText] = useState("");
	const [showEmptyCipher, setShowEmptyCipher] = useState(true);

	const handlePlainTextChange = (e) => {
		setPlainText(e.target.value);
	};

	const handleKeyChange = (e) => {
		setKey(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Encrypt the plain text
		setCipherText(encryptByPlayfairCipher(plainText, key));
	};

	const handleDecrypt = () => {
		// Decrypt the cipher text
		// setPlainText(decryptByPlayfairCipher(cipherText, key));
		console.log(decryptByPlayfairCipher(cipherText, key));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="key">Key:</label>
					<input type="text" id="key" value={key} onChange={handleKeyChange} />
				</div>

				<br />
				<FiveFiveStatic cipherText={key} />
				<div>
					<label htmlFor="plainText">Plain Text:</label>
					<input
						type="text"
						id="plainText"
						value={plainText}
						onChange={handlePlainTextChange}
					/>
				</div>
				<button type="submit">Encrypt</button>
			</form>

			<button onClick={handleDecrypt}>Decrypt</button>

			{cipherText && <div>Encrypted Text: {cipherText}</div>}
		</div>
	);
}

export default CipherForm;
