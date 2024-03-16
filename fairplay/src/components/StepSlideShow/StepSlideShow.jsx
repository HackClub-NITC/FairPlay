import FiveFiveDynamic from "../FiveFiveDynamic/FiveFiveDynamic";
import FilterInputText from "../FilterInputText/FilterInputText";
import React, { useState } from "react";

const StepSlideShow = () => {
	const [key, setKey] = useState("");
	const [inputString, setInputString] = useState("");

	return (
		<div>
			<input
				type="text"
				value={key}
				onChange={(e) => setKey(e.target.value)}
				placeholder="Enter key"
			/>
			<br />
			<input
				type="text"
				value={inputString}
				onChange={(e) => setInputString(e.target.value)}
				placeholder="Enter input string"
			/>
			<br />
			<br />
			<FilterInputText inputString={inputString} />
			<br />
			<FiveFiveDynamic cipherText={key} />
			<br />

			<br />
		</div>
	);
};

export default StepSlideShow;
