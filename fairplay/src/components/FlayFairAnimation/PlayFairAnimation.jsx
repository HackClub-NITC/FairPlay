import React from "react";
import { useState } from "react";

import "./PlayFairAnimation.css";

import FilterInputText from "../FilterInputText/FilterInputText";

const PlayfairCipher = () => {
    const [plainText, setPlainText] = useState('');
    const [cipherKey, setCipherKey] = useState('');
    const [cipherText, setCipherText] = useState('');
    const [matrix, setMatrix] = useState([]);

    const generateMatrix = () => {
        // Generate the 5x5 matrix based on the cipher key
        const key = cipherKey.toLowerCase().replace(/[^a-z]/g, '');
        const alphabet = 'abcdefghiklmnopqrstuvwxyz';
        const keySet = new Set(key);
        const matrixArray = [...keySet, ...alphabet].filter((char, index, array) => {
            return array.indexOf(char) === index;
        });

        const matrix = [];
        for (let i = 0; i < 5; i++) {
            matrix.push(matrixArray.slice(i * 5, (i + 1) * 5));
        }

        setMatrix(matrix);
    };

    const encrypt = () => {
        // Implement the Playfair cipher encryption logic here
        const text = plainText.toLowerCase().replace(/[^a-z]/g, '');
        const matrixArray = matrix.flat();
        let encryptedText = '';

        for (let i = 0; i < text.length; i += 2) {
            const char1 = text[i];
            const char2 = text[i + 1] || 'x';

            const index1 = matrixArray.indexOf(char1);
            const index2 = matrixArray.indexOf(char2);

            let encryptedChar1, encryptedChar2;

            if (index1 === -1 || index2 === -1) {
                encryptedChar1 = char1;
                encryptedChar2 = char2;
            } else {
                const row1 = Math.floor(index1 / 5);
                const col1 = index1 % 5;
                const row2 = Math.floor(index2 / 5);
                const col2 = index2 % 5;

                if (row1 === row2) {
                    encryptedChar1 = matrix[row1][(col1 + 1) % 5];
                    encryptedChar2 = matrix[row2][(col2 + 1) % 5];
                } else if (col1 === col2) {
                    encryptedChar1 = matrix[(row1 + 1) % 5][col1];
                    encryptedChar2 = matrix[(row2 + 1) % 5][col2];
                } else {
                    encryptedChar1 = matrix[row1][col2];
                    encryptedChar2 = matrix[row2][col1];
                }
            }

            encryptedText += encryptedChar1 + encryptedChar2;
        }

        setCipherText(encryptedText);
    };

    const handleNext = () => {
        // Perform the next step of the cipher process
        // Implement your logic here
        // This function can be used to implement additional steps of the Playfair cipher process, such as decryption or other transformations.
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter plain text"
                value={plainText}
                onChange={(e) => setPlainText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter cipher key"
                value={cipherKey}
                onChange={(e) => setCipherKey(e.target.value)}
            />
            <button onClick={generateMatrix}>Generate Matrix</button>
            <button onClick={encrypt}>Encrypt</button>
            <button onClick={handleNext}>Next</button>
            <div>
                <p>Plain Text: {plainText}</p>
                <p>Cipher Key: {cipherKey}</p>
                <p>Cipher Text: {cipherText}</p>
                <p>Matrix:</p>
                <FilterInputText inputString={plainText} />
                <div className="matrix">
                    {matrix.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((char, colIndex) => (
                                <div key={colIndex} 
                                    className="cell"
                                    style={{
                                        color: 5*rowIndex + (colIndex) < cipherKey.length ? "green" : "black", // Set the color to green
                                    }}

                                    >{char}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayfairCipher;