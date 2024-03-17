import React from "react";

import styles from "./Landing.module.css";

import detective from "./assets/detective.svg";
import rome from "./assets/rome.png";
import title_t from "./assets/title_t.png";

import Radio from "../Radio/Radio";
import FiveFiveDynamic from "../FiveFiveDynamic/FiveFiveDynamic";
import ChatbotButton from "../ChatBox/ChatBotButton";
import CipherForm from "../CipherForm/CipherForm";

const Landing = () => {
	return (
		<div className={styles.Landing}>
			<img src={title_t} alt="title" className={styles.title} />
			<br />
			<img src={rome} alt="rome" className={styles.rome} />
			<img src={detective} alt="detective" className={styles.detective} />
			<br />
			<CipherForm />
			<br />

			<FiveFiveDynamic />
			<ChatbotButton />
		</div>
	);
};

export default Landing;
