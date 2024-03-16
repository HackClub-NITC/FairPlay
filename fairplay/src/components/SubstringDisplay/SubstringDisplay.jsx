import React from "react";
import styles from "./SubstringDisplay.module.css"; // Import CSS Module

function SubstringDisplay({ substrings, length, first, encrypted }) {
  return (
    <div className={styles.grid_input_text}>
      {/* Conditionally render based on the 'first' prop */}
      {first ? (
        Array.from({ length }, (_, index) => (
          <div key={index} className={styles.substring}></div>
        ))
      ) : (
        substrings.map((substring, index) => (
          <div
            key={index}
            className={`${styles.substring} ${
              encrypted ? (index === substrings.length - 1 ? styles.pulsate : "") : ""
            }`}
          >
            {substring.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={char === "x" ? styles.green : styles.black} // Use generated class names
              >
                {char}
              </span>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default SubstringDisplay;
