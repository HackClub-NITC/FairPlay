import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import FilterInputText from "../FilterInputText/FilterInputText";
import { encryptByPlayfairCipher } from "./encrypt";
import { decryptByPlayfairCipher } from "./decrypt";

function CipherForm() {
	const [plainText, setPlainText] = useState("");
	const [key, setKey] = useState("");
	const [cipherText, setCipherText] = useState("");
	const [decryptedText, setDecryptedText] = useState("");
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
		console.log(plainText.replace(/\s/g, ""));
		setCipherText(
			encryptByPlayfairCipher(plainText.replace(/\s/g, ""), key).toUpperCase()
		);
	};

	const handleDecrypt = () => {
		// Decrypt the cipher text
		setDecryptedText(decryptByPlayfairCipher(cipherText, key).toUpperCase());
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<label htmlFor="plainText">Plain Text:</label>
						<input
							type="text"
							id="plainText"
							value={plainText}
							onChange={handlePlainTextChange}
						/>
					</div>
					<br />
					<FilterInputText inputString={plainText} />
					<br />
					<label htmlFor="key">Key:</label>
					<input type="text" id="key" value={key} onChange={handleKeyChange} />
				</div>

				<br />
				<FiveFiveStatic cipherText={key} />
				<br />

				<button type="submit">Encrypt</button>
			</form>

			<button onClick={handleDecrypt}>Decrypt</button>
			<br />
			{cipherText && <div>Encrypted Text: {cipherText}</div>}
			<br />
			{decryptedText && <div>Decrypted Text: {decryptedText}</div>}
		</div>
	);
}

export default CipherForm;
