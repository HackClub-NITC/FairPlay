import React, { useState } from "react";
import FiveFiveStatic from "../FiveFiveStatic/FiveFiveStatic";
import FilterInputText from "../FilterInputText/FilterInputText";
import { encryptByPlayfairCipher } from "./encrypt";
import { decryptByPlayfairCipher } from "./decrypt";
import SubstringDisplay from "../SubstringDisplay/SubstringDisplay";

import style from "./CipherForm.module.css";

function CipherForm() {
	const [plainText, setPlainText] = useState("");
	const [key, setKey] = useState("");
	const [cipherText, setCipherText] = useState("");
	const [decryptedText, setDecryptedText] = useState("");
	const [showEmptyCipher, setShowEmptyCipher] = useState(true);

	const handlePlainTextChange = (e) => {
		setPlainText(e.target.value.replace(/\s/g, ""));
	};

	const handleKeyChange = (e) => {
		setKey(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Encrypt the plain text
		setCipherText(
			encryptByPlayfairCipher(plainText.replace(/\s/g, ""), key).toUpperCase()
		);
	};

	const handleDecrypt = () => {
		// Decrypt the cipher text
		setDecryptedText(decryptByPlayfairCipher(cipherText, key).toUpperCase());
	};

	return (
		<div className={style.CipherForm}>
			<form onSubmit={handleSubmit}>
				<div className={style.inputbox}>
					<div>
						<label htmlFor="plainText">Plain Text:</label>
						<input
							className={style.input}
							type="text"
							id="plainText"
							value={plainText}
							onChange={handlePlainTextChange}
						/>
					</div>
					<br />
					{plainText ? ( // Conditionally render FilterInputText if plainText is not empty
						<FilterInputText inputString={plainText} />
					) : (
						<SubstringDisplay
							substrings={[]}
							length={0}
							first={true}
							encrypted={false}
						/>
					)}
					<br />
					<label htmlFor="key">Key:</label>
					<input className={style.input} type="text" id="key" value={key} onChange={handleKeyChange} />
				</div>
			</form>
				<br />
				<FiveFiveStatic cipherText={key} />
				<br />
			<div className="button_box">
			
			<button type="submit">Encrypt</button>
			<button onClick={handleDecrypt}>Decrypt</button>
			</div>
			{cipherText && <div>Encrypted Text: {cipherText}</div>}
			<br />
			{decryptedText && <div>Decrypted Text: {decryptedText}</div>}
		</div>
	);
}

export default CipherForm;
