import React from "react";
import "./FiveFive.css";

const matrix5x5 = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 26],
];

const Fivefive = ({ cipherText }) => {
	return (
		<div>
			{matrix5x5.map((row, i) => (
				<div key={i} className={`row ${i}`}>
					{row.map((col, j) => (
						<div key={j} className="box" id={`${i}${j}`}>
							<p>
								{cipherText ? cipherText[(i * 5 + j) % cipherText.length] : ""}
							</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Fivefive;
