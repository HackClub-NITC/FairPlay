import React from "react";

import styles from "./Landing.module.css";

import detective from "./assets/detective.svg";
import rome from "./assets/rome.png";
import Radio from "../Radio/Radio";
import FiveFiveDynamic from "../FiveFiveDynamic/FiveFiveDynamic";

const Landing = () => {
	return (
		<div className={styles.Landing}>
			<img src={rome} alt="rome" className={styles.rome} />
			<img src={detective} alt="detective" className={styles.detective} />

			<FiveFiveDynamic />
		</div>
	);
};

export default Landing;
