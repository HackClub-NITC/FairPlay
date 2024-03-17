import React from "react";

import styles from "./Landing.module.css";

import detective from "./assets/detective.svg";
import rome from "./assets/rome.png";
import title_t from "./assets/title_t.png";

import Radio from "../Radio/Radio";
import FiveFiveDynamic from "../FiveFiveDynamic/FiveFiveDynamic";
import ChatbotButton from "../ChatBox/ChatBotButton";
import CipherForm from "../CipherForm/CipherForm";
import AboutPage from "../About/about";

const Landing = () => {
	return (
		<div className={styles.Landing}>
			<img src={title_t} alt="title" className={styles.title} />
			<h2 className={styles.titleText}>
				An educational site to use and study the Playfair Cipher
			</h2>
			<br />
			<img src={rome} alt="rome" className={styles.rome} />
			<img src={detective} alt="detective" className={styles.detective} />

			<CipherForm />
			<br />

			<FiveFiveDynamic />
			<ChatbotButton />
			<br />
			<AboutPage />
		</div>
	);
};

export default Landing;
