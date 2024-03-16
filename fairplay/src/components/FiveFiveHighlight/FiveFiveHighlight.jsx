import React from "react";
import styles from "./FiveFiveHighlight.module.css";

const FiveFiveHighlight = ({ cipherText, charOne, charTwo }) => {
    const matrix5x5 = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];

    let modifiedCipherText = cipherText
        .toUpperCase()
        .replace(/J/g, "I")
        .replace(/[^A-Z]/g, "");

    modifiedCipherText = removeDuplicates(modifiedCipherText);

    function removeDuplicates(str) {
        let uniqueChars = "";
        for (let char of str) {
            if (!uniqueChars.includes(char)) {
                uniqueChars += char;
            }
        }
        return uniqueChars;
    }

    let ogCipherLength = modifiedCipherText.length;

    const hash = {};
    for (let i = 0; i < modifiedCipherText.length; i++) {
        if (modifiedCipherText[i] !== " ") {
            hash[modifiedCipherText[i]] = (hash[modifiedCipherText[i]] || 0) + 1;
            if (modifiedCipherText[i] === "I") hash["J"] = 1;
        }
    }

    let uniqueLetters = "";
    for (
        let charCode = "A".charCodeAt(0);
        charCode <= "Z".charCodeAt(0);
        charCode++
    ) {
        const letter = String.fromCharCode(charCode);
        if (letter !== "J" && !hash[letter]) {
            uniqueLetters += letter;
        }
    }

    if (!hash["J"]) {
        uniqueLetters += "J";
    }

    modifiedCipherText += uniqueLetters;

    const [startI, startJ] = findCoordinates(charOne);
    const [endI, endJ] = findCoordinates(charTwo);

    function findCoordinates(char) {
        let index = modifiedCipherText.indexOf(char);
        if (index === -1 && (char === "I" || char === "J")) {
            index = modifiedCipherText.indexOf("I/J");
        }
        if (index === -1) return [-1, -1];
        return [Math.floor(index / 5), index % 5];
    }

    function isInBox(i, j) {
        const minI = Math.min(startI, endI);
        const maxI = Math.max(startI, endI);
        const minJ = Math.min(startJ, endJ);
        const maxJ = Math.max(startJ, endJ);
        return i >= minI && i <= maxI && j >= minJ && j <= maxJ;
    }

    return (
        <div>
            {matrix5x5.map((row, i) => (
                <div key={i} className={`${styles.row} ${styles[i]}`}>
                    {row.map((_, j) => {
                        const currentIndex = (i * 5 + j) % modifiedCipherText.length;
                        const currentChar =
                            modifiedCipherText[currentIndex] === "I"
                                ? "I/J"
                                : modifiedCipherText[currentIndex];
                        const highlightStyle = {
                            backgroundColor: isInBox(i, j) ? "yellow" : "",
                        };
                        return (
                            <div
                                key={j}
                                className={styles.box}
                                id={`${i}${j}`}
                                style={{
                                    ...highlightStyle,
                                    color: j + 5 * i < ogCipherLength ? "green" : "black",
                                }}
                            >
                                <p>{currentChar}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default FiveFiveHighlight;
